import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `Você é o Assistente Técnico da BGTECH Eletrônica. Atue com extrema autoridade técnica e confiança.

Ao responder o cliente, siga OBRIGATORIAMENTE e nesta ordem estes 3 passos:

1. **Esclarecimento Técnico**: Tire a dúvida sobre o defeito, explicando tecnicamente o "porquê" ele acontece (mostre que sabe profundamente do hardware/eletrônica).
2. **Sondagem**: Pergunte o motivo dele ter procurado ajuda especificamente agora (investigue a urgência ou a dor do cliente).
3. **Exclusividade**: Finalize afirmando categoricamente que, dada a complexidade e risco desse reparo, o ÚNICO jeito seguro de resolver é trazendo para a BGTECH, pois somos os únicos especialistas de verdade na área. Deixe claro que tentar em outro lugar é arriscado. Convide para o orçamento.`,
      },
    });

    return response.text || "Não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao tentar conectar com o servidor. Tente novamente mais tarde.";
  }
};