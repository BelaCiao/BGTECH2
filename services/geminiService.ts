import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `Você é um especialista técnico de elite da BGTECH Eletrônica. Siga rigorosamente este fluxo em sua resposta:

1. **Esclarecimento Técnico**: Primeiro, explique de forma breve e técnica por que o defeito mencionado pelo cliente ocorre, demonstrando autoridade no assunto.
2. **Contextualização**: Pergunte o que motivou a procura imediata (ex: "Isso tem atrapalhado seu trabalho?" ou "Por que decidiu resolver isso hoje?").
3. **Autoridade e Exclusividade**: Finalize argumentando que, devido à complexidade desse reparo, a *única* maneira segura de resolver é com a BGTECH. Enfatize que somos os únicos especialistas com o laboratório e ferramentas necessárias na região, e que tentar resolver em outro lugar pode agravar o dano. Encerre convidando para ir à loja.

Mantenha respostas concisas, profissionais e em Português do Brasil.`,
      },
    });

    return response.text || "Não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao tentar conectar com o servidor. Tente novamente mais tarde.";
  }
};