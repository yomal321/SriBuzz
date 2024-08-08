import React from "react";
import NewsProvider from "./NewsProvider";
import ReadTime from "./ReadTime";

function NewsCard({
  imageSrc,
  provider,
  title,
  content,
  readTime,
  category,
  timeAgo,
}) {
  return (
    <div className="card">
      <img
        className="rounded-xl w-full aspect-square object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="my-3">
        <NewsProvider provider="Netflix" timeAgo="12 Minutes Ago" />
      </div>
      <h2 className="text-3xl font-bold my-3">{title}</h2>
      <p className="text-justify">{content}</p>
      <ReadTime readTime={readTime} category={category} />
    </div>
  );
}

export default NewsCard;
