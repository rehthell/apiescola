'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class Aluno extends Model {
     static init(sequelize) {  
      super.init({
        id: {type: DataTypes.INTEGER, field: 'id_aluno', primaryKey: true, autoIncrement: true},
        tx_nome: DataTypes.STRING,
        tx_sexo: DataTypes.STRING,
        dt_nascimento: DataTypes.DATE
      }, {
        sequelize,
        modelName: 'Aluno',
      });
    }
    static associate(models) {
      // define association here
      this.belongsToMany(models.Cursa, {through: 'cursa', foreignKey: 'id_aluno', as: 'disciplina', otherKey: 'id_disciplina'} )//chave composta
    }
  };

  module.exports = Aluno;