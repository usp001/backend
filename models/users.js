"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      fname: DataTypes.STRING,
      mname: DataTypes.STRING,
      lname: DataTypes.STRING,
      section: DataTypes.STRING,
      yearlvl: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      token: DataTypes.STRING,
      role: { type: DataTypes.STRING, defaultValue: "student" },
      department: DataTypes.STRING,
      code:DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
