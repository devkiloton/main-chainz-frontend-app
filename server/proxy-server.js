const express = require('express');
const path = require('path');

const getTranslatedServer = lang => {
  const distFolder = path.join(process.cwd(), `dist/angular-app/server/${lang}`);
  const server = require(`${distFolder}/main.js`);
  return server.app(lang);
};

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const appPtBr = getTranslatedServer('pt-BR');
  const appEn = getTranslatedServer('en-US');
  const appHiIn = getTranslatedServer('hi-IN');

  const server = express();
  server.use('/pt-BR', appPtBr);
  server.use('/en-US', appEn);
  server.use('/hi-IN', appHiIn);
  server.use('', appEn);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
