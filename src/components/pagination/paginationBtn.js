import { useState } from "react";
import styled from "styled-components";

const PaginationBtn = (props) => {
    // 버튼 클릭 시 pageList까지 클릭한 index 데이터 전달
    const btnNum = (e) => {
        e.preventDefault();
        props.getData(e.target.textContent);
    };

    return (
        <PageBtn onClick={btnNum} role="button">
            {props.num}
        </PageBtn>
    );
};
const PageBtn = styled.button`
    width: 50px;
    text-align: center;
`;
export default PaginationBtn;
