// utils/readContent.js
export async function fetchTextToSpeech(text, language = "en") {
  try {
    const response = await fetch(
      `/api/read?text=${encodeURIComponent(text)}&targetLanguage=${language}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("audio/mpeg")) {
      const responseBody = await response.text(); // Read the response as text
      throw new Error(
        `Unexpected content-type: ${contentType}. Response body: ${responseBody}`
      );
    }

    // Return the response as a blob for audio playback
    const audioBlob = await response.blob();
    return audioBlob;
  } catch (error) {
    console.error("Error fetching text-to-speech audio:", error);
    throw new Error("Text-to-speech failed");
  }
}
