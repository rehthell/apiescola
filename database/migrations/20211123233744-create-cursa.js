'use strict'; //tabela tipo explosão
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cursa', {
      id_aluno: {
        type: Sequelize.INTEGER,
        references: { model: 'Aluno', key: 'id_aluno' },
        primaryKey: true
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        references: { model: 'Disciplina', key: 'id_disciplina' },
        primaryKey: true
      },
      in_ano: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      in_semestre: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      in_faltas: {
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
    await queryInterface.dropTable('Cursa');
  }
};