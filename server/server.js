/* eslint no-console: "off"*/

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import morgan from 'morgan';

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join('src', 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join('src', 'public')));

//logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.get('*', (req, res) => {
  let status = 200;

  return res.status(status).render('index');

});


// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
    `);
});
