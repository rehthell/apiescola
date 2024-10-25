'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Professor extends Model {
  static init(sequelize) {
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_professor', primaryKey: true, autoIncrement: true},
      id_titulo: DataTypes.INTEGER,
      tx_nome: DataTypes.STRING,
      tx_sexo: DataTypes.STRING,
      tx_estado_civil: DataTypes.STRING,
      dt_nascimento: DataTypes.DATE,
      tx_telefone: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Professor',
    });
  }
  static associate(models) {
    // define association here
    this.belongsToMany(models.Leciona, { through: 'leciona', foreignKey: 'id_professor', as: 'disciplina', otherKey: 'id_disciplina' });
    this.belongsTo(models.Titulo, { foreignKey: 'id_titulo', as: 'titulo' });
  }
};

module.exports = Professor;