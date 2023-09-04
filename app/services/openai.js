const { OpenAI } = require('openai') 
require('dotenv').config()

const OpenAIService = {
    call: async (options) => {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        })

        try {
            let question = `Soy estudiante de la carrera de Ingeniería en sistemas computacionales
            tengo una duda sobre ${options.subject} en el tema de ${options.topic} y mi pregunta es:
            ${options.question}`
            const gptResponse = await openai.completions.create({
                model:'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'Engineer',
                        content: question
                    }
                ]
            })
            console.log(gptResponse);
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    }
}

module.exports = {
    OpenAIService
}