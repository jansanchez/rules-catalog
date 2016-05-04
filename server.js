#!/usr/bin/env node
'use strict';

import path from 'path';
import express from 'express';
import reactEngine from 'react-engine';

const config = require('./configuration');

// Server
const app = express();
app.use(express.static(path.join(__dirname, 'public/')));

// Declaro a jsx como el motor de renderizado
app.engine('.jsx', reactEngine.server.create());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.set('view', reactEngine.expressView);

// Routes
app.get('/', (request, response) => {
  response.render('index', {title: 'Rules Catalog', subtitle: 'Documentation by Categories'});
});
app.get('/rules/:id', (request, response) => {
  response.render('rule', {id: request.params.id});
});

// Running Server
app.listen(config.port, () => {
  console.log(`Server running in localhost:${config.port}`);
});
