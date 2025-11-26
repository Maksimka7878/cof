import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getCoffeeRecommendation = async (mood: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the intelligence network at the moment. Please check the API key configuration.";
  }

  const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.tags.join(', ')}): ${item.description}`).join('\n');

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        You are an expert, high-end coffee sommelier at Lumina Brew. 
        Your tone is elegant, sophisticated, and brief (Apple-style copywriting).
        
        The user feels: "${mood}".
        
        Based on our menu below, recommend ONE drink and explain why in one poetic sentence.
        
        Menu:
        ${menuContext}
        
        Format output as plain text. Do not use markdown headers.
      `,
    });

    return response.text || "I recommend the Velvet Latte for a moment of pure comfort.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Our baristas recommend the Obsidian Espresso to grant you clarity.";
  }
};