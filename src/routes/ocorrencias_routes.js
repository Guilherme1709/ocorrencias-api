const { Router } = require('express');

const ocorrenciasRoutes = Router();

ocorrenciasRoutes.get('/', (req, res) => {
    return res.json({
        message: 'Lista de Ocorrências'
    });
});

module.exports = ocorrenciasRoutes;