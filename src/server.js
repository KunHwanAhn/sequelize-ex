const { createServer } = require('http');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const { init } = require('./db/models');
const logger = require('./logger');
const routes = require('./routes');

const start = async () => {
  const port = process.env.SERVER_PORT || 3000;
  await init();

  const app = new Koa();
  const router = new Router();

  app.on('error', (err) => {
    logger.error('[Unhandled Exception] server error', err);
  });

  router.use(routes.routes());

  app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  createServer(app.callback()).listen(port);
};

module.exports = {
  start,
};
