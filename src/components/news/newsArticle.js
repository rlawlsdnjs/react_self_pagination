import { styled } from "styled-components";
const NewsArticles = (props) => {
    return (
        <>
            <News>
                <h3>title </h3>

                {props.title}
            </News>
        </>
    );
};

const News = styled.div`
    font-size: 12px;
    width: 100px;
    white-space: no-wrap;
    margin: 5px;
    border: 1px solid #fff;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;

export default NewsArticles;
