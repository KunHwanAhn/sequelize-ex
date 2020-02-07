const { MODEL_NAMES } = require('../../constants');

module.exports = (sequelize, DataTypes) => sequelize.define(MODEL_NAMES.USER, {
  firstName: {
    type: DataTypes.STRING,
    comment: '이름',
  },
  lastName: {
    type: DataTypes.STRING,
    comment: '성',
  },
});
