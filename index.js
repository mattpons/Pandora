const express = require('express');
const bodyParser = require('body-parser');

const box = require('./box');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


function getEndpoints() {

    const routes = app._router.stack  // registered routes
        .filter(r => r.route)        // take out all the middleware
        .map(r => r.route);         // get all the routes

    const endpoints = [];
    routes.forEach(route => {
        const path = route.path; // path
        const method = route.stack[0].method.toUpperCase(); // method
        endpoints.push({ path, method })
    });

    return endpoints;
}

app.get('/api', (req, res, next) => {
    const endpoints = getEndpoints();
    res.status(200).end(JSON.stringify({ endpoints }, null, 2));
});

app.get('/randString', (req, res, next) => {
    const randString = box.cryptoRand();
    res.status(200).end(JSON.stringify({ randString }, null, 2));
});

app.post('/reverse', (req, res, next) => {
    const original = req.body.message;
    const reversed = box.reverse(original);
    res.status(200).end(JSON.stringify({ original, reversed }, null, 2));
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