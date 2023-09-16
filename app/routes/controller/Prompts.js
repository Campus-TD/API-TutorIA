const express = require('express')
const router = express.Router()
const { ChatBotIA } = require('../../services/chatbotService')

router.use(express.json());

router.post('/api/prompt', async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({
                status: 400,
                message: 'Bad Request',
                error: 'Body is required'
            });
        } else {
            if (!req.body.id || !req.body.name || !req.body.subject || !req.body.topic || !req.body.question) {
                res.status(400).json({
                    status: 400,
                    message: 'Bad Request',
                    error: 'Some required fields are missing'
                });
            } else {
                const response = await ChatBotIA.call(req.body);
                res.status(200).json({
                    status: 200,
                    message: 'OK',
                    body: {
                        data: response
                    }
                });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: error.message
        });
    }
});

module.exports = router;
