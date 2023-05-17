const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 8080;
const debug = process.env.DEBUG === 'yes' || false;

app.get('/', (req, res) => {
    const msg = "Hola aqui estamos. Hora: " + new Date().toISOString();
    res.send(msg);

    if (debug) {  // FEATURE FLAG
        console.log(msg)
    }
});

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});



/** MOCK de un API de pizzeria  */
app.get('/pizzas', (req, res) => {
    const pizzas = JSON.parse(fs.readFileSync('./datos/pizzas.json'));
    res.json(pizzas);
});

app.listen(port, () => {
    console.log('corriendo en el puerto ' + port);
});

