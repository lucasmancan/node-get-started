
module.exports = (sequelize, Sequelize) => {

const Phone =  sequelize.define('phones', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    phone: { type: Sequelize.STRING(20), allowNull: false },
    ddd: { type: Sequelize.STRING(4), allowNull: false },
    ddi: { type: Sequelize.STRING(4), allowNull: false },    
    default : {type: Sequelize.BOOLEAN}
    }, {
    timestamps: true,

    // underscored: true,
  
    freezeTableName: true,
  
    tableName: 'phones',

  })

    return Phone;
}
