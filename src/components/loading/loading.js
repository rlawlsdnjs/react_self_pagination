import { styled } from "styled-components";
const Loading = () => {
    console.log("loading");
    return <LoadingWrap>Loading...</LoadingWrap>;
};

const LoadingWrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100000;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 50px;
    text-align: center;
    vertical-align: center;
`;

export default Loading;
