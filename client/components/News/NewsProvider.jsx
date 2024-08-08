import React from "react";

function NewsProvider({ provider, timeAgo }) {
  return (
    <div className="flex gap-3">
      <p className="text-gray-500">{provider}</p>
      <span className="text-gray-500 font-bold">&#8226;</span>
      <p className="text-gray-500">{timeAgo}</p>
    </div>
  );
}

export default NewsProvider;
