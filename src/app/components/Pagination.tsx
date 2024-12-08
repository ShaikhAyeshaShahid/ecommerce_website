import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <button className="px-4 py-2 border rounded">Previous</button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className="px-4 py-2 border rounded hover:bg-blue-600 hover:text-white"
        >
          {page}
        </button>
      ))}
      <button className="px-4 py-2 border rounded">Next</button>
    </div>
  );
};

export default Pagination;
