import React from "react";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";

const pagination = ({getPage}) => {

    const handlePageClick = (data) => {
        console.log(data.selected + 1)
      getPage(data.selected + 1)
    }
    const pageCount = 500;
    return(
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

    )
}
export default pagination;