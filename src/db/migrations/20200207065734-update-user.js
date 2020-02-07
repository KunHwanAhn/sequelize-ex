const { TABLE_NAMES } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const options = {
      allowNull: false,
      type: Sequelize.STRING,
    };

    await queryInterface.changeColumn(TABLE_NAMES.USER, 'firstName', options);
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'lastName', options);
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'email', options);
  },
  down: async (queryInterface, Sequelize) => {
    const options = {
      type: Sequelize.STRING,
    };

    await queryInterface.changeColumn(TABLE_NAMES.USER, 'firstName', options);
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'lastName', options);
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'email', options);
  },
};
