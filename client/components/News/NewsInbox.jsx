import React from "react";
import NewsProvider from "./NewsProvider";
import ReadTime from "./ReadTime";

function NewsInbox() {
  return (
    <a href="#" className="group relative block bg-black h-full rounded-3xl">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 h-full">
        <div className="absolute bottom-0 left-0 right-0 flex flex-col  p-4 sm:p-6 lg:p-8">
          <NewsProvider provider="Netflix" timeAgo="12 Minutes Ago" />
          <p className="text-sm text-white mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            perferendis hic asperiores quibusdam quidem voluptates doloremque
            reiciendis nostrum harum. Repudiandae?
          </p>
          <ReadTime readTime="5 Mins" category="Movies" />
        </div>
      </div>
    </a>
  );
}

export default NewsInbox;
