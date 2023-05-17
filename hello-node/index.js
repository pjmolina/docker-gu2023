const express = require('express');
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

app.listen(port, () => {
    console.log('corriendo en el puerto ' + port);
});
