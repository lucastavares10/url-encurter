const { DataTypes } = require("sequelize");
const sequelize = require("../../database/pgsql");

const Shortcut = sequelize.define(
  "Shortcut",
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);

module.exports = Shortcut;

