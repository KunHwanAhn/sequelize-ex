const { sequelize } = require('./db/models');
const { MODEL_NAMES } = require('./constants');
const logger = require('./logger');

(async () => {
  const userModel = sequelize.model(MODEL_NAMES.USER);

  const users = await userModel.findAll();
  users.forEach((user) => {
    const {
      id, firstName, lastName, createdAt, updatedAt,
    } = user;

    logger.info(`id >> ${id}`);
    logger.info(`firstName >> ${firstName}`);
    logger.info(`lastName >> ${lastName}`);
    logger.info(`createdAt >> ${createdAt}`);
    logger.info(`updatedAt >> ${updatedAt}`);
  });
})();
