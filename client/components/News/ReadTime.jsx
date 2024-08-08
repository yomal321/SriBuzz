import React from "react";

function ReadTime({ readTime, category }) {
  return (
    <div className="flex gap-3 mt-5">
      <p className="text-red-600 font-bold">{category}</p>
      <span className="text-gray-500 font-bold">&#8226;</span>
      <p className="text-gray-500">{readTime}</p>
    </div>
  );
}

export default ReadTime;
