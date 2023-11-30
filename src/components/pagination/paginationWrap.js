import PaginationBtn from "./paginationBtn";

const PaginationWrap = (props) => {
    return (
        <div>
            {[...Array(parseInt(Math.ceil(props.pagenum)))].map((item, idx) => {
                return (
                    <PaginationBtn
                        key={idx}
                        num={idx + 1}
                        getData={props.getData}></PaginationBtn>
                );
            })}
        </div>
    );
};

export default PaginationWrap;
