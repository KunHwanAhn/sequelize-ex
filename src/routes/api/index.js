const Router = require('@koa/router');
const users = require('./users');

const router = new Router();

router.get('/hello', ({ response }) => {
  response.status = 200;
  response.body = {
    data: 'Hello World',
  };
});

router.use('/users', users.routes());

module.exports = router;
