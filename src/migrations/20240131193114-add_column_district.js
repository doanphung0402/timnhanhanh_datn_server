'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("Posts", "district", {
      type: Sequelize.STRING,
      allowNull: true ,
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn("district");

  }
};
