const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Hola aqui estamos. Hora: " + new Date().toISOString());
});

app.listen(port, () => {
    console.log('corriendo en el puerto ' + port);
});
