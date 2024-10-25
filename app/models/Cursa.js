'use strict';
const { Model, DataTypes } = require('sequelize');

class Cursa extends Model {
  static init(sequelize) {
    super.init({
      id_aluno: DataTypes.INTEGER,
      id_disciplina: DataTypes.INTEGER,
      in_ano: DataTypes.INTEGER,
      in_semestre: DataTypes.INTEGER,
      in_faltas: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Cursa',
    });
  }
  static associate(models) {
    // define association here
  }
};

module.exports = Cursa;
