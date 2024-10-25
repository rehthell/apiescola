'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Tipo_Disciplina extends Model {
  static init(sequelize) {
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_tipo_disciplina', primaryKey: true, autoIncrement: true},
      tx_descricao: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Tipo_Disciplina',
    });
  }
  static associate(models) {
    // define association here
    //contra-mão
    this.hasMany(models.Disciplina, { foreignKey: 'id_tipo_disciplina', as: 'disciplinas'});

  }
};

module.exports = Tipo_Disciplina;