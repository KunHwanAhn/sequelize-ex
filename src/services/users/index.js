const { db } = require('../../db/models');
const { MODEL_NAMES } = require('../../constants');

const readUsers = async () => {
  const userModel = db.sequelize.model(MODEL_NAMES.USER);

  const users = await userModel.findAll();

  return users;
};

const createUser = async (userData) => {
  const userModel = db.sequelize.model(MODEL_NAMES.USER);

  const createdUser = await userModel.create(userData);

  return createdUser;
};

module.exports = {
  readUsers,
  createUser,
};
