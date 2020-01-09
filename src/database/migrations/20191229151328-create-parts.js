'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('parts', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        part_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        in_player: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          dafaultValue: false,
        },
        in_team: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          dafaultValue: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },        
      });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('parts');
    
  }
};