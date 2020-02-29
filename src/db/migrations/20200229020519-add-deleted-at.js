const { TABLE_NAMES } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE_NAMES.USER, 'deletedAt', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(TABLE_NAMES.USER, 'deletedAt');
  },
};
