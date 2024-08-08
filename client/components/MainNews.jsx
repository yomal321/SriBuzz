import React from "react";
import NewsProvider from "./News/NewsProvider";
import ReadTime from "./News/ReadTime";

function MainNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div>
        <img
          src="https://images.unsplash.com/photo-1583912267382-49a82d19bd94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-2xl"
        />
      </div>
      <div className="flex items-center">
        <div>
          <NewsProvider provider="Netflix" timeAgo="12 Minutes Ago" />

          <div className="mt-3">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Where to Watch 'John Wick: Chapter 4'
            </h1>
            <p className="mt-5 text-gray-500 leading-7 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              magnam ipsum velit obcaecati est molestiae veniam nostrum ad
              molestias repellat voluptatibus inventore autem beatae quisquam
              nulla dolore, debitis voluptates rem? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Omnis, tenetur.
            </p>
          </div>
          <ReadTime readTime="5 Mins" category="Movies" />
        </div>
      </div>
    </div>
  );
}

export default MainNews;
