'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Disciplina extends Model {
  static init(sequelize) {
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_disciplina', primaryKey: true, autoIncrement: true},
      id_curso: {type: DataTypes.INTEGER, field: 'id_curso'},
      id_tipo_disciplina: DataTypes.INTEGER,
      tx_sigla: DataTypes.STRING,
      tx_descricao: DataTypes.STRING,
      in_periodo: DataTypes.INTEGER,
      in_carga_horaria: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Disciplina',
    });
  }
  static associate(models) {
    // define association here
    this.belongsToMany(models.Cursa, { through: 'cursa', foreignKey: 'id_disciplina', as: 'aluno', otherKey: 'id_aluno' });
    this.belongsTo(models.Curso, { foreignKey: 'id_curso', as: 'curso' });
    this.belongsTo(models.Tipo_Disciplina, { foreignKey: 'id_tipo_disciplina', as: 'tipo_disciplina' });
    this.belongsToMany(models.Leciona, { through: 'leciona', foreignKey: 'id_professor', as: 'disciplina', otherKey: 'id_disciplina' });
  }
};


module.exports = Disciplina;