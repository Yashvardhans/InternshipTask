import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
      <div className="page-indicator">
        Page {currentPage} of {totalPages}
      </div>
      {/* code for previous and next button */}
      <div className="page-number">
        {currentPage > 1 && (
          <Link
            to={currentPage === 2 ? "/page/1" : `/page/${currentPage - 1}`}
            className={`page-button`}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </Link>
        )}

        {pageNumbers.map((pageNumber) => (
          <Link
            key={pageNumber}
            to={pageNumber === 1 ? "/page/1" : `/page/${pageNumber}`}
            className={`page-button ${
              currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link
            to={`/page/${currentPage + 1}`}
            className={`page-button`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
