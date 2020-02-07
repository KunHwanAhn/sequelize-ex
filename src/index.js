const { sequelize } = require('./db/models');
const { MODEL_NAMES } = require('./constants');

(async () => {
  const userModel = sequelize.model(MODEL_NAMES.USER);

  try {
    await userModel.sync({ force: true });
  } catch (error) {
    console.log('Failed to create user table', error);
  }

  const users = await userModel.findAll();
  users.forEach((user) => {
    const {
      id, firstName, lastName, createdAt,
    } = user;
    console.log(id);
    console.log(firstName);
    console.log(lastName);
    console.log(createdAt);
  });
})();
