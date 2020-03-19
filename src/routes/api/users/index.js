const Router = require('@koa/router');

const { readUsers, createUser } = require('../../../services/users');
const logger = require('../../../logger');

const router = new Router();

router.get('/', async ({ response }) => {
  try {
    const users = await readUsers();

    response.status = 200;
    response.body = users;
  } catch (err) {
    logger.error('[users/read] failed to reas users', err);
    response.status = 500;
    response.body = err;
  }
});

router.post('/', async ({ request, response }) => {
  const { body } = request;

  try {
    const createdUser = await createUser(body);

    response.status = 201;
    response.body = createdUser;
  } catch (err) {
    logger.error('[users/create] failed to create user', err);
    response.status = 400;
    response.body = err;
  }
});

module.exports = router;
