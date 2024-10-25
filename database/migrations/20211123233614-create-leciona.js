'use strict';//tabela do tipo explosão
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Leciona', {
      id_professor: {
        type: Sequelize.INTEGER,
        references: { model: 'Professor', key: 'id_professor' },
        primaryKey: true
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        references: { model: 'Disciplina', key: 'id_disciplina' },
        primaryKey: true
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
    await queryInterface.dropTable('Leciona');
  }
};