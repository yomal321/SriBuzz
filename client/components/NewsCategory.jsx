import React from "react";
import { FaArrowRight } from "react-icons/fa";
import NewsCardTitleOnly from "./News/NewsCardTitleOnly";

function NewsCategory({ category }) {
  return (
    <div>
      <div className="flex my-5 justify-between">
        <h2 className="text-3xl font-bold">{category}</h2>
        <h2 className="text-2xl font-bold text-red-700">
          <FaArrowRight />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <NewsCardTitleOnly
          imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          provider="BBC News"
          title="He Deserves a lot more Verstappen Backs Alonso"
          readTime="5 min read"
          category="Movies"
          timeAgo="12 Minutes Ago"
        />

        <NewsCardTitleOnly
          imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          provider="BBC News"
          title="He Deserves a lot more Verstappen Backs Alonso"
          readTime="5 min read"
          category="Movies"
          timeAgo="12 Minutes Ago"
        />
      </div>
    </div>
  );
}

export default NewsCategory;
