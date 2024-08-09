"use client";

import React, { useEffect, useState } from "react";
import translate from "google-translate-api-x";
import { fetchTranslation } from "@/utils/translation";

function MainBanner({
  targetLanguage,
  welcomeText: OriginalWelcomeText,
  mainHeading: OriginalMainHeading,
  highlightText: OriginalHighlightedText,
}) {
  const [translatedWelcomeText, setTranslatedWelcomeText] =
    useState(OriginalWelcomeText);
  const [translatedMainHeading, setTranslatedMainHeading] =
    useState(OriginalMainHeading);
  const [translatedHighlightText, setTranslatedHighlightText] = useState(
    OriginalHighlightedText
  );

  useEffect(() => {
    const translateText = async () => {
      try {
        if (targetLanguage !== "en") {
          const WelcomeResponse = await fetchTranslation(
            OriginalWelcomeText,
            targetLanguage
          );
          setTranslatedWelcomeText(WelcomeResponse);

          const MainHeadingResponse = await fetchTranslation(
            OriginalMainHeading,
            targetLanguage
          );
          setTranslatedMainHeading(MainHeadingResponse);

          const HighlightTextResponse = await fetchTranslation(
            OriginalHighlightedText,
            targetLanguage
          );
          setTranslatedHighlightText(HighlightTextResponse);
        } else {
          setTranslatedWelcomeText(OriginalWelcomeText);
          setTranslatedMainHeading(OriginalMainHeading);
          setTranslatedHighlightText(OriginalHighlightedText);
        }
      } catch (error) {
        console.error("Error translating text:", error);
        setTranslatedWelcomeText("Error translating welcome text.");
        setTranslatedMainHeading("Error translating main heading.");
        setTranslatedHighlightText("Error translating highlight text.");
      }
    };

    translateText();
  }, [
    OriginalWelcomeText,
    OriginalMainHeading,
    OriginalHighlightedText,
    targetLanguage,
  ]);

  return (
    <section className="bg-gray-200 rounded-3xl">
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-4 sm:text-xl/relaxed">{translatedWelcomeText}</p>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {translatedMainHeading}
            <strong className="font-extrabold text-red-700 sm:block">
              {translatedHighlightText}
            </strong>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
