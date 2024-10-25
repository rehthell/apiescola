'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Leciona extends Model {
  static init(sequelize) {
    super.init({
      id_professor: DataTypes.INTEGER,
      id_disciplina: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Leciona',
    });
  }
  static associate(models) {
    // define association here
  }
};

module.exports = Leciona;
