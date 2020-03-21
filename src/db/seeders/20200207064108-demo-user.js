const { TABLE_NAMES } = require('../../constants');

module.exports = {
  up: (queryInterface) => {
    const now = new Date();

    return queryInterface.bulkInsert(TABLE_NAMES.USER, [{
      firstName: 'John',
      lastName: 'Doe',
      createdAt: now,
      updatedAt: now,
      email: 'jdoe@example.com',
      status: 'CREATED',
    }], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete(TABLE_NAMES.USER, {
    email: 'jdoe@example.com',
  }),
};
