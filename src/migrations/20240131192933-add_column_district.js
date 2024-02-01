'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("Posts", "ward", {
      type: Sequelize.STRING,
      allowNull: true ,
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn("ward");
   
  }
};
