import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function* generateChatResponseStream(
  messages: { role: 'user' | 'model', text: string }[],
  systemInstruction: string
) {
  const contents = messages.map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }));

  const responseStream = await ai.models.generateContentStream({
    model: "gemini-3.1-pro-preview",
    contents,
    config: {
      systemInstruction,
    }
  });

  for await (const chunk of responseStream) {
    yield chunk.text;
  }
}
