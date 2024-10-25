'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Professor', {
      id_professor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_titulo: {
        type: Sequelize.INTEGER,
        references: { model: 'Titulo', key: 'id_titulo' }      
      },
      tx_nome: {
        type: Sequelize.STRING
      },
      tx_sexo: {
        type: Sequelize.STRING
      },
      tx_estado_civil: {
        type: Sequelize.STRING
      },
      dt_nascimento: {
        type: Sequelize.DATE
      },
      tx_telefone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Professor');
  }
};