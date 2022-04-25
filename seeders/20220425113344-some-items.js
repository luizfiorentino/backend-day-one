"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "do some grosseries",
        deadline: "the end of the week",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "wash the car",
        deadline: "the end of the day",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "finish the report",
        deadline: "tomorrow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "do the backend project",
        deadline: "thursday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "bring pet to the vet center",
        deadline: "the end of the week",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "buy more medicine",
        deadline: "the end of the week",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
