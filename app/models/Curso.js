const { Model, DataTypes } = require('sequelize');


class Curso extends Model {
  static init(sequelize) {  
    super.init({
      id: {type: DataTypes.INTEGER, field: 'id_curso', primaryKey: true, autoIncrement: true},
      id_instituicao: DataTypes.INTEGER,
      id_tipo_curso: DataTypes.INTEGER,
      tx_descricao: DataTypes.STRING
    }, {
      sequelize,
    //modelName: 'Curso',
    });
}

static associate( models ) { 
  //mão 
  this.belongsTo( models.Instituicao, { foreignKey: 'id_instituicao', as: 'instituicao' } );
  this.belongsTo( models.Tipo_Curso, { foreignKey: 'id_tipo_curso', as: 'tipo curso' } );
  //contra-mão
  this.hasMany(models.Disciplina, {foreignKey: 'id_curso', as: 'disciplinas'});
}
}

module.exports = Curso;