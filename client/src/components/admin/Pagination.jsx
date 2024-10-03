import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        } transition-all duration-300 hover:bg-blue-600`}
        disabled={currentPage === 1}
        onClick={() => handlePageClick(1)}
      >
        First
      </button>

      <button
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        } transition-all duration-300 hover:bg-blue-600`}
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`px-3 py-1 mx-1 rounded-md ${
              currentPage === pageNumber
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
            } transition-all duration-300`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        } transition-all duration-300 hover:bg-blue-600`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>

      <button
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        } transition-all duration-300 hover:bg-blue-600`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(totalPages)}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
