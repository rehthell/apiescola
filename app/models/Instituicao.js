'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Instituicao extends Model {
  static init(sequelize) {
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_instituicao', primaryKey: true, autoIncrement: true},
      tx_sigla: DataTypes.STRING,
      tx_tx_descricao: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Instituicao',
    });
  }
  static associate(models) {
    // define association here
    this.hasMany(models.Curso, { as: 'cursos' });
  }
};

module.exports = Instituicao;