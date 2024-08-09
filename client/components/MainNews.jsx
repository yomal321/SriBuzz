"use client";

import React, { useEffect, useState } from "react";
import NewsProvider from "./News/NewsProvider";
import ReadTime from "./News/ReadTime";
import { fetchTranslation } from "@/utils/translation";

function MainNews({
  targetLanguage,
  imageSrc,
  provider,
  title: originalTitle,
  content: originalContent,
  readTime,
  category,
  timeAgo,
}) {
  const [translatedTitle, setTranslatedTitle] = useState("");
  const [translatedContent, setTranslatedContent] = useState("");

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
              {translatedTitle}
            </h1>
            <p className="mt-5 text-gray-500 leading-7 text-justify">
              {translatedContent}
            </p>
          </div>
          <ReadTime readTime="5 Mins" category="Movies" />
        </div>
      </div>
    </div>
  );
}

export default MainNews;
