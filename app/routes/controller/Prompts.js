const express = require('express')
const router = express.Router()
const { OpenAIService } = require('../../services/openai')

router.use(express.json());

router.post('/api/prompt', async (req, res) => {
    try {
        /**
         * Body required
         *  id: int(10) | string(11),
         *  name: string,
         *  subject: string,
         *  topic: string,
         *  question: string,
         */
        if(Object.keys(req.body).length === 0) {
            res.status(400).json({
                status: 400,
                message: 'Bad Request',
                error: 'Body is required'
            });
        } else {
            if(!req.body.id) {
                res.status(400).json({
                    status: 400,
                    message: 'Bad Request',
                    error: 'ID is required'
                });
            } else if(!req.body.name) {
                res.status(400).json({
                    status: 400,
                    message: 'Bad Request',
                    error: 'Name is required'
                });
            } else if(!req.body.subject) {
                res.status(400).json({
                    status: 400,
                    message: 'Bad Request',
                    error: 'Subject is required'
                });
            } else if(!req.body.topic) {
                res.status(400).json({
                    status: 400,
                    message: 'Bad Request',
                    error: 'Topic is required'
                });
            } else if(!req.body.question) {
                res.status(400).json({
                    status: 400,
                    message: 'Bad Request',
                    error: 'Question is required'
                });
            } else {
                //TODO validate body and process
                OpenAIService.call(req.body)
                res.status(200).json({
                    status: 200,
                    message: 'OK',
                    data: req.body
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            error: error
        });
    }
})

module.exports = router