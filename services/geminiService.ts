import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const createGemologistChat = (): Chat => {
  const ai = getAiClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are 'Pierre', an expert AI Gemologist and Jewelry Consultant for Éclat Joaillerie. 
      Your tone is sophisticated, warm, and helpful. You represent a high-end luxury brand.
      
      Your knowledge includes:
      1. The 4Cs of Diamonds (Cut, Color, Clarity, Carat).
      2. Precious metals (Platinum, Gold, Rose Gold).
      3. Jewelry care and maintenance.
      4. Helping customers choose engagement rings based on style (Vintage, Modern, Solitaire, Halo).
      5. Gift recommendations based on budget and occasion.

      If a user asks about prices, give general ranges or refer to the 'Collections' page, but assume our catalog includes rings from $1,000 to $50,000+.
      Keep responses concise (under 100 words unless detailed explanation is asked) and formatted nicely.`,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};