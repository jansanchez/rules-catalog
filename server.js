#!/usr/bin/env node
'use strict';

import path from 'path';
import express from 'express';
import engine from 'react-engine';

const config = require('./configuration');

const app = express();
app.use(express.static(path.join(__dirname, 'public/')));

app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

app.get('/', (req, res) => {
  res.render('index', {title: 'Rules Catalog', subtitle: 'References and documentation by Categories'});
});

app.listen(config.port, () => {
  console.log(`Server running in localhost:${config.port}`);
});
