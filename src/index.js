const { start } = require('./server');
const logger = require('./logger');

(async () => {
  await start();
  logger.info('server started');
})();
