'use strict';

const bcrypt = require('bcryptjs');

module.exports = {up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Curso', {
      id_curso: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_instituicao: {
        type: Sequelize.INTEGER,
        references: { model: 'Instituicao', key: 'id_instituicao' }
      },
      id_tipo_curso: {
        type: Sequelize.INTEGER,
        references: { model: 'Tipo_Curso', key: 'id_tipo_curso' }
      },
      tx_descricao: {
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
    await queryInterface.dropTable('Curso');
  }
};