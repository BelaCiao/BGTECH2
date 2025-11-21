import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "Você é um técnico sênior da BGTECH, uma assistência técnica de eletrônicos em Rio Grande, RS. Dê diagnósticos preliminares curtos (máximo 2 parágrafos), profissionais e técnicos. SEMPRE termine recomendando levar o aparelho para um orçamento gratuito na loja física. Responda em Português do Brasil. Seja prestativo e direto. Não invente preços.",
      },
    });

    return response.text || "Não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao tentar conectar com o servidor. Tente novamente mais tarde.";
  }
};