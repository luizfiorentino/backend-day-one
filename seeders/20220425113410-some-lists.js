"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "Messi's list",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joyce's list",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jack's list",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maribel's list",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
