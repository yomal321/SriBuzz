"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "./News/NewsCard";
import { fetchTranslation } from "@/utils/translation";

function LatestNews({ targetLanguage }) {
  return (
    <section className="my-16">
      <div className="flex my-5 justify-between">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <h2 className="text-2xl font-bold text-red-700">See all </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NewsCard
          targetLanguage={targetLanguage}
          imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          provider="BBC News"
          title="He Deserves a lot more Verstappen Backs Alonso"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
          readTime="5 min read"
          category="Movies"
          timeAgo="12 Minutes Ago"
        />

        <NewsCard
          targetLanguage={targetLanguage}
          imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          provider="BBC News"
          title="He Deserves a lot more Verstappen Backs Alonso"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
          readTime="5 min read"
          category="Movies"
          timeAgo="12 Minutes Ago"
        />

        <NewsCard
          targetLanguage={targetLanguage}
          imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          provider="BBC News"
          title="He Deserves a lot more Verstappen Backs Alonso"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
          readTime="5 min read"
          category="Movies"
          timeAgo="12 Minutes Ago"
        />

        <NewsCard
          targetLanguage={targetLanguage}
          imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          provider="BBC News"
          title="He Deserves a lot more Verstappen Backs Alonso"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
          readTime="5 min read"
          category="Movies"
          timeAgo="12 Minutes Ago"
        />
      </div>
    </section>
  );
}

export default LatestNews;
