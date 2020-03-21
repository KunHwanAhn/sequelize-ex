const { TABLE_NAMES } = require('../../constants');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'status', {
      type: Sequelize.STRING(50),
    }, { transaction });
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_users_status";', { transaction });
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'status', {
      allowNull: false,
      type: Sequelize.ENUM('CREATED', 'APPROVED', 'PAUSED'),
    }, { transaction });
    await queryInterface.sequelize.query('ALTER TABLE users ALTER COLUMN status SET DEFAULT \'CREATED\';', { transaction });
  }),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.sequelize.query('ALTER TABLE users ALTER COLUMN status DROP DEFAULT', { transaction });
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'status', {
      type: Sequelize.STRING(50),
    }, { transaction });
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_users_status";', { transaction });
    await queryInterface.changeColumn(TABLE_NAMES.USER, 'status', {
      type: Sequelize.ENUM('CREATED', 'APPROVED', 'PAUSED'),
    }, { transaction });
  }),
};
