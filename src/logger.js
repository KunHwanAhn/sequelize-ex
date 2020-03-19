const pino = require('pino');

const logger = pino({
  prettyPrint: {
    colorize: true,
    translateTime: 'SYS:standard',
  },
});

module.exports = logger;
