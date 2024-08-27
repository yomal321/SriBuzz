"use client";

import React, { useEffect, useState } from "react";
import NewsProvider from "./NewsProvider";
import ReadTime from "./ReadTime";
import Link from "next/link";
import { fetchTranslation } from "@/utils/translation";

function NewsCard({
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
    <Link href={`/${targetLanguage}/news/test-key`}>
      <div className="card group hover:shadow-md rounded-xl">
        <img
          className="rounded-xl w-full aspect-square object-cover"
          src={imageSrc}
          alt={translatedTitle}
        />
        <div className="group-hover:p-4 transition-all duration-500">
          <div className="my-3">
            <NewsProvider provider={provider} timeAgo={timeAgo} />
          </div>
          <h2 className="text-3xl font-bold my-3">{translatedTitle}</h2>
          <p className="text-justify">{translatedContent}</p>
          <ReadTime readTime={readTime} category={category} />
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
