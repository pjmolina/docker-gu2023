const express = require('express');
const fs = require('fs');
const app = express();
var os = require("os");

const port = process.env.PORT || 8080;
const debug = process.env.DEBUG === 'yes' || false;

app.get('/', (req, res) => {
    const hostname = os.hostname();
    const msg = "Hola aqui estamos. Hora: " + new Date().toISOString() + " Hostname: " + hostname;
    res.send(msg);

    if (debug) {  // FEATURE FLAG
        console.log(msg)
    }
});

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.get('/clave', (req, res) => {
    // 1. ENV VAR
    // const clave = process.env.PASSWORD; 

    // 2. Secreto
    const clave = fs.readFileSync('/run/secrets/clave').toString();

    res.json({ clave: clave });
});



/** MOCK de un API de pizzeria  */
app.get('/pizzas', (req, res) => {
    const pizzas = JSON.parse(fs.readFileSync('./datos/pizzas.json'));
    res.json(pizzas);
});

app.listen(port, () => {
    console.log('corriendo en el puerto ' + port);
});

