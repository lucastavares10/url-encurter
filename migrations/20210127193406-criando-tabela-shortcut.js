"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Shortcut",
      {
        key: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        url: {
          type: Sequelize.DataTypes.STRING,
        },
      },
      { timestamps: true }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Shortcut");
  },
};
