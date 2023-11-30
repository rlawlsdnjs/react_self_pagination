import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsArticles from "../news/newsArticle";
import PaginationWrap from "./paginationWrap";
const PageListWrap = () => {
    // page 당 보여줄 content 수
    let maxPage = 5;
    let [pageNum, setPageNum] = useState(0);

    //  받아올 content 정보
    let category = "all";
    const apiKey = "87f3b3f401d34f478daa07de5c5cfe8f";
    let page = 0;
    const pageSize = 100;

    let newsUrl = `https://newsapi.org/v2/top-headlines?country=kr&category=${
        category === "all" ? "" : category
    }&page=${page}&pagesize=${pageSize}&apiKey=${apiKey}`;

    // newsData
    let [newsData, setNewsData] = useState(null);

    // 현재 contents index 설정
    const [focusNum, setFocusNum] = useState(1);

    // 보여줄 컨텐츠 순서
    let [newsSlice, setNewsSlice] = useState([0, 5]);

    //  news api 데이터 받기
    const newsGet = async () => {
        try {
            const res = await axios.get(`${newsUrl}`);
            setNewsData(res.data.articles);
            setPageNum(res.data.articles.length / maxPage);
            console.log(res);
        } catch (err) {
            console.log("error");
        }
    };

    // Mount 시 데이터 수신
    useEffect(() => {
        newsGet();
    }, []);

    // pagination 클릭 시 index 갱신 함수, 보여줄 컨텐츠 순서 함수
    const getData = (num) => {
        setFocusNum(num);
        setNewsSlice([num * maxPage - 5, num * maxPage]);
    };

    return (
        <>
            <PageList>
                {newsData != null ? (
                    <>
                        {newsData
                            .slice(newsSlice[0], newsSlice[1])
                            .map((item, idx) => {
                                return (
                                    <NewsArticles
                                        key={item.title}
                                        title={item.title}
                                        num={idx}></NewsArticles>
                                );
                            })}
                    </>
                ) : null}
            </PageList>
            <PaginationWrap
                pagenum={pageNum}
                getData={getData}></PaginationWrap>
        </>
    );
};

const PageList = styled.ul`
    display: flex;
    justify-content: center;
`;

export default PageListWrap;
