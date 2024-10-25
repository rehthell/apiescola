'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Titulo extends Model {
  static init(sequelize) {
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_titulo', primaryKey: true, autoIncrement: true},
      tx_descricao: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Titulo',
    });
  }
  static associate(models) {
    // define association here
    this.hasMany(models.Professor, { foreignKey: 'id_titulo', as: 'professores' });
  }
};

module.exports = Titulo;