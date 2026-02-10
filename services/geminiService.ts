
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProgramDescription = async (title: string, category: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a compelling, inspiring, and professional description for an NGO program titled "${title}" in the "${category}" category. Keep it under 100 words. Focus on community impact.`,
    });
    return response.text || "Failed to generate description.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating content. Please try again.";
  }
};

export const generateThankYouNote = async (donorName: string, amount: number, programTitle: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a heartfelt, personalized thank you letter from EcoHeart NGO to ${donorName} for their generous donation of $${amount} towards the "${programTitle}" program. Mention how this specific contribution will change lives.`,
    });
    return response.text || "Thank you for your incredible support!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Thank you for your contribution! You are making a real difference.";
  }
};

export const generateImpactReport = async (program: any): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short impact summary for the program "${program.title}". Context: it has raised $${program.currentAmount} of $${program.goalAmount}. Highlight the momentum and the urgency of reaching the goal.`,
    });
    return response.text || "Our impact is growing every day thanks to you.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Progress is being made. Join us to reach our goal.";
  }
};
