
module.exports = (sequelize, Sequelize) => {

const Phone =  sequelize.define('Phones', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    phone: { type: Sequelize.STRING(20), allowNull: false },
    ddd: { type: Sequelize.STRING(4), allowNull: false },
    dd1: { type: Sequelize.STRING(4), allowNull: false },    
    default : {type: Sequelize.BOOLEAN},
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
});

    return Phone;
}
