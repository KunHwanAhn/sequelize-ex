const { TABLE_NAMES } = require('../../constants');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_users_status";', { transaction });
    await queryInterface.addColumn(TABLE_NAMES.USER, 'status', {
      type: Sequelize.ENUM('CREATED', 'APPROVED', 'PAUSED'),
    }, { transaction });
    await queryInterface.sequelize.query('UPDATE users SET "status"=\'APPROVED\' WHERE "status" is null;', { transaction });
  }),

  down: (queryInterface) => queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.removeColumn(TABLE_NAMES.USER, 'status', { transaction });
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_users_status";', { transaction });
  }),
};
