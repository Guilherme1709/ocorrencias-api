const express = require('express');
const ocorrenciasRoutes = require('./routes/ocorrencias_routes');

const app = express();

app.use(express.json());

app.use('/ocorrencias', ocorrenciasRoutes);

app.listen(3333, () => {
    console.log('Servidor ok!');
})

