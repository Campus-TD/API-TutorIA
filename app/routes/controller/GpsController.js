const express = require('express')
const router = express.Router()
router.use(express.json());

let log = []

router.get('/api/location', async (req, res) => {
    try {
        console.log('DEBUG: ', req.body);
        if(req.query.id === undefined) {
            res.json({
                status: 401,
                message: 'No se recibió ID'
            });
        } else if(req.query.id === '') {
            res.json({
                status: 401,
                message: 'ID inválido'
            });
        }
        
        if(Object.keys(req.body).length === 0) {
            res.json({
                status: 401,
                message: 'No se recibió información de ubicación'
            });
        }
        log.push(req.body)
        res.json({
            status: 200,
            message: 'Ubicación recibida',
            data: {
                id: req.query.id,
                location: req.body
            }
        });

        console.log('=====================      DATOS RECIBIDOS      =====================');
        console.log('ID: ', req.query.id);
        console.log('Ubicación: ', req.body);
    } catch (error) {
        console.log(error);
    }
})

router.post('/api/test', async (req, res) => {
    try {
        console.log('=====================      DATOS RECIBIDOS      =====================');
        console.log('DEBUG: ', req.body);
        log.push(req.body)
        res.json({
            status: 200,
            message: 'Datos recibidos',
            data: req.body
        });
    } catch (error) {
        console.log(error);
    }
})

router.get('/log', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Log obtenido',
            data: log
        })
    } catch (error) {
        res.json({
            status: 500,
            message: 'Error al obtener el log'
        })
        console.log(error);
    }
})

module.exports = router