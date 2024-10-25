'use strict';
const {
  Model, DataTypes
} = require('sequelize');
class Tipo_Curso extends Model {
  static init(sequelize) {
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_tipo_curso', primaryKey: true, autoIncrement: true},
      tx_descricao: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Tipo_Curso',
    });
  }
  static associate(models) {
    // define association here
    this.hasMany(models.Curso, { as: 'cursos' });
  }
};

module.exports = Tipo_Curso;
