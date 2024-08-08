import React from "react";
import NewsProvider from "./NewsProvider";
import ReadTime from "./ReadTime";

function MiniNewsCard({
  imageSrc,
  provider,
  title,
  readTime,
  category,
  timeAgo,
}) {
  return (
    <div className="card">
      <img
        className="rounded-xl w-full h-36 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="my-3">
        <NewsProvider provider="Netflix" timeAgo="12 Minutes Ago" />
      </div>
      <h2 className="text-2xl font-bold my-3">{title}</h2>
      <ReadTime readTime={readTime} category={category} />
    </div>
  );
}

export default MiniNewsCard;
