// const sequelize = require('./database').sequelize;
// const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Email =  sequelize.define('Emails', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        email: { type: Sequelize.STRING(40), allowNull: false },    
        default : {type: Sequelize.BOOLEAN},
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });

    return Email;
}
