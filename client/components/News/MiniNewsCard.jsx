"use client";

import React, { useEffect, useState } from "react";
import NewsProvider from "./NewsProvider";
import ReadTime from "./ReadTime";
import Link from "next/link";
import { fetchTranslation } from "@/utils/translation";

function MiniNewsCard({
  targetLanguage,
  imageSrc,
  provider,
  title: originalTitle,
  readTime,
  category,
  timeAgo,
}) {
  const [translatedTitle, setTranslatedTitle] = useState(originalTitle);

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
      } catch (error) {
        console.error("Error translating text:", error);
        setTranslatedTitle("Error translating title.");
      }
    };

    translateText();
  }, [originalTitle, targetLanguage]);

  return (
    <Link href={`/${targetLanguage}/news/test-key`}>
      <div className="card">
        <img
          className="rounded-xl w-full h-36 object-cover"
          src={imageSrc}
          alt={translatedTitle}
        />
        <div className="my-3">
          <NewsProvider provider="Netflix" timeAgo="12 Minutes Ago" />
        </div>
        <h2 className="text-2xl font-bold my-3">{translatedTitle}</h2>
        <ReadTime readTime={readTime} category={category} />
      </div>
    </Link>
  );
}

export default MiniNewsCard;
