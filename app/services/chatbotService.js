const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const deepl = require('deepl-node');
require("dotenv").config();
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY_PaLM = process.env.API_KEY_PaLM;
const API_KEY_DeepL = process.env.API_KEY_DeepL;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY_PaLM),
});

const translator = new deepl.Translator(API_KEY_DeepL);

const ChatBotIA = {
  call: async (options) => {
    try {
      let prompt = `Soy estudiante de la carrera Ingeniería en sistemas computacionales, tengo una duda sobre la asignatura: ${options.subject}, en el tema: ${options.topic}, la pregunta es: ${options.question}`;

      let result = await ChatBotIA.translate({
        text: prompt,
        source: 'ES',
        target: 'en-US'
      });

      const response = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: result,
        },
      });

      const translated = await ChatBotIA.translate({
        text: response[0].candidates[0].output,
        source: 'EN',
        target: 'ES'
      });

      return translated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  translate: async (options) => {
    try {
      const result = await translator.translateText(options.text, options.source, options.target);
      return result.text;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

module.exports = {
  ChatBotIA,
};
