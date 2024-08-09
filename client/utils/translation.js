// utils/translation.js
export async function fetchTranslation(text, language = "en") {
  try {
    const response = await fetch(
      `/api/translate?text=${encodeURIComponent(
        text
      )}&targetLanguage=${language}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const responseBody = await response.text(); // Read the response as text
      throw new Error(
        `Unexpected content-type: ${contentType}. Response body: ${responseBody}`
      );
    }

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error("Error fetching translation:", error);
    throw new Error("Translation failed");
  }
}
