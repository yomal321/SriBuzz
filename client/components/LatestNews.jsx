"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "./News/NewsCard";
import { formatDistanceToNow } from "date-fns";
import config from "@/config";

function LatestNews({ targetLanguage }) {
  const [News, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/api/news`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        setError("Failed to fetch news");
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const textLength = text.split(" ").length;
    const readingTime = Math.ceil(textLength / wordsPerMinute);
    return `${readingTime} min read`;
  };

  return (
    <section className="my-16">
      <div className="flex my-5 justify-between">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <h2 className="text-2xl font-bold text-red-700">See all</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {News.map((singlenews) => (
          <NewsCard
            key={singlenews.newsId}
            targetLanguage={targetLanguage}
            imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            provider={singlenews.createdBy}
            title={singlenews.newsTitle}
            content={singlenews.newsDescription}
            readTime={calculateReadingTime(singlenews.newsDescription)} // Calculate reading time
            category="Movies"
            timeAgo={formatDistanceToNow(new Date(singlenews.createdAt[0]), {
              addSuffix: true,
            })}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
