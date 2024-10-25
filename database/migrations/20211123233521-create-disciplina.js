'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Disciplina', {
      id_disciplina: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_curso: {
        type: Sequelize.INTEGER,
        references: { model: 'Curso', key: 'id_curso' }
      },
      id_tipo_disciplina: {
        type: Sequelize.INTEGER,
        references: { model: 'Tipo_Disciplina', key: 'id_tipo_disciplina' }
      },
      tx_sigla: {
        type: Sequelize.STRING
      },
      tx_descricao: {
        type: Sequelize.STRING
      },
      in_periodo: {
        type: Sequelize.INTEGER
      },
      in_carga_horaria: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Disciplina');
  }
};