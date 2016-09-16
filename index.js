const express = require('express');
const bodyParser = require('body-parser');

const box = require('./box');
const PORT = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/hello', (req, res, next) => {
    let message = req.body.message;
    let transformedMsg = box.hello(message);
    res.status(200).end(JSON.stringify({ transformedMsg }, null, 2));
});

app.post('/bonjour', (req, res, next) => {
    let message = req.body.message;
    let transformedMsg = box.bonjour(message);
    res.status(200).end(JSON.stringify({ transformedMsg }, null, 2));
});

app.post('/reverse', (req, res, next) => {
    let message = req.body.message;
    let transformedMsg = box.reverse(message);
    res.status(200).end(JSON.stringify({ transformedMsg }, null, 2));
});


app.use((req, res, next) => {
    res.status(405).send(`Method Not Allowed: ${req.path}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.end(JSON.stringify({ error: err.message }, null, 2));

});

app.listen(PORT, () => {
    console.log(`Pandora listening on port ${PORT}`);
});