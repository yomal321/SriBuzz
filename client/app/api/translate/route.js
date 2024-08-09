// app/api/translate/route.js
import translate from "google-translate-api-x";

export async function GET(request) {
  const url = new URL(request.url);
  const text = url.searchParams.get("text");
  const targetLanguage = url.searchParams.get("targetLanguage");

  if (!text || !targetLanguage) {
    return new Response(
      JSON.stringify({ error: "Missing text or targetLanguage parameter" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const response = await translate(text, { to: targetLanguage });
    return new Response(JSON.stringify({ translatedText: response.text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Translation error:", error); // Log error for debugging
    return new Response(JSON.stringify({ error: "Translation failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
