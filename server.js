#!/usr/bin/env node
'use strict';

const express = require('express');
const app = express();
const port = 3000;
const publicPath = `${__dirname}/public/`;

app.use(express.static(publicPath));

app.get('/', (request, response) => {
	app.set('view engine', 'ejs');
	response.render('index', { });
});

app.get('/rules', (request, response) => {
	response.type('application/json');
	response.sendFile(`${publicPath}static/json/rules_catalog.json`);
});

app.get('/rules/:id', (request, response) => {
	app.set('view engine', 'ejs');
	response.render('rule', { id:request.params.id });
});

app.listen(port, () => {
	console.log(`Server listening on: http://localhost:${port}`);
});
