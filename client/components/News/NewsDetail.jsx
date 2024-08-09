"use client";

import React, { useEffect, useState } from "react";
import NewsProvider from "@/components/News/NewsProvider";
import ReadTime from "@/components/News/ReadTime";
import { fetchTranslation } from "@/utils/translation";
import Link from "next/link";

function NewsDetail({
  targetLanguage,
  imageSrc,
  provider,
  title: originalTitle,
  content: originalContent,
  readTime,
  category,
  timeAgo,
}) {
  const [translatedTitle, setTranslatedTitle] = useState(originalTitle);
  const [translatedContent, setTranslatedContent] = useState(originalContent);

  useEffect(() => {
    const translateText = async () => {
      try {
        // Translate title if language is not 'en'
        if (targetLanguage !== "en") {
          const titleResponse = await fetchTranslation(
            originalTitle,
            targetLanguage
          );
          setTranslatedTitle(titleResponse);
        } else {
          setTranslatedTitle(originalTitle);
        }

        // Translate content if language is not 'en'
        if (targetLanguage !== "en") {
          const contentResponse = await fetchTranslation(
            originalContent,
            targetLanguage
          );
          setTranslatedContent(contentResponse);
        } else {
          setTranslatedContent(originalContent);
        }
      } catch (error) {
        console.error("Error translating text:", error);
        setTranslatedTitle("Error translating title.");
        setTranslatedContent("Error translating content.");
      }
    };

    translateText();
  }, [originalTitle, originalContent, targetLanguage]);
  return (
    <div>
      <h2 className="text-3xl font-bold my-3">{translatedTitle}</h2>
      <div className="my-3">
        <NewsProvider provider="BBC News" timeAgo="5 Minuete Ago" />
      </div>
      <img
        className="rounded-xl w-full object-cover"
        src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cover Image"
      />

      <p className="text-justify my-5">{translatedContent}</p>
      <ReadTime readTime="5 Mins read" category="Business" />
    </div>
  );
}

export default NewsDetail;
