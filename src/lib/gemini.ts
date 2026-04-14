import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set. Chatbot will not function.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const chatModel = "gemini-3-flash-preview";

export const systemInstruction = `
You are the AI assistant for "Manash Dental Care", a premium dental clinic led by Dr. Manash.
Your goal is to provide helpful, friendly, and professional information to potential and existing patients.

Clinic Details:
- Name: Manash Dental Care
- Lead Dentist: Dr. Manash (5+ years experience, highly qualified)
- Services: Teeth Cleaning, Root Canal Treatment, Braces & Aligners, Teeth Whitening, Dental Implants.
- Tone: Professional, human, empathetic, and premium.
- Location: Serving the local community with advanced equipment and affordable pricing.

Capabilities:
- Answer FAQs about dental treatments (pricing, duration, pain levels).
- Provide general dental health advice (do not replace professional medical diagnosis).
- Guide users on how to book an appointment (via the website form).
- Be friendly and welcoming.

Constraints:
- ONLY answer dental-related queries. If a user asks about anything else, politely redirect them to dental topics.
- If asked about specific medical advice that requires an exam, suggest booking a consultation with Dr. Manash.
- Keep responses concise and easy to read.
`;

export async function getChatResponse(message: string, history: { role: "user" | "model"; parts: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: chatModel,
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.parts }] })),
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or call our clinic.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please feel free to call us directly for any inquiries.";
  }
}
