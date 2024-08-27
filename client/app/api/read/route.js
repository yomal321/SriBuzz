import { speak } from "google-translate-api-x";

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
    const audioResponse = await speak(text, { to: targetLanguage });

    return new Response(audioResponse, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioResponse.length.toString(),
      },
    });
  } catch (error) {
    console.error("Speech synthesis error:", error);
    return new Response(JSON.stringify({ error: "Speech synthesis failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
