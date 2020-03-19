const { sequelize } = require('./db/models');
const { MODEL_NAMES } = require('./constants');

(async () => {
  const userModel = sequelize.model(MODEL_NAMES.USER);

  const users = await userModel.findAll();
  users.forEach((user) => {
    const {
      id, firstName, lastName, createdAt, updatedAt,
    } = user;

    /* eslint-disable */
    console.log(id);
    console.log(firstName);
    console.log(lastName);
    console.log(createdAt);
    console.log(updatedAt);
    /* eslint-enable */
  });
})();
