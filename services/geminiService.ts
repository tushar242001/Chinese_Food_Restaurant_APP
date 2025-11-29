import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

// Initialize Gemini Client
const apiKey = process.env.API_KEY || ''; // Ensure this env var is set
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-2.5-flash';

// Convert menu to string for context
const menuContext = MENU_ITEMS.map((item: MenuItem) => 
  `- ${item.name} ($${item.price}): ${item.description} [${item.category}, Spicy: ${item.spicyLevel}/3, Vegetarian: ${item.isVegetarian}]`
).join('\n');

const SYSTEM_INSTRUCTION = `
You are "Chef Ming", the AI Concierge for "Golden Lotus Bistro", a high-end Chinese restaurant.
Your goal is to help customers choose dishes from our menu, answer questions about ingredients, and make personalized recommendations.

Here is our FULL MENU. Do not recommend items not on this list.
${menuContext}

Guidelines:
1. Be polite, enthusiastic, and describe food in a mouth-watering way.
2. If a user asks for spicy food, check the "Spicy" level in the context.
3. If a user is vegetarian, strictly recommend items marked Vegetarian: true.
4. Keep answers concise (under 100 words) unless asked for a long explanation.
5. If you suggest a dish, mention the price.
6. Use emojis occasionally 🥟 🥢.
`;

export const sendMessageToChef = async (history: {role: string, parts: {text: string}[]}[], userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my connection to the kitchen (API Key) is missing. Please contact the manager.";
  }

  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history // Pass previous chat history for context
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: userMessage
    });

    return result.text || "I'm busy in the kitchen right now, could you repeat that?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble hearing you over the wok noise. Please try again later.";
  }
};
