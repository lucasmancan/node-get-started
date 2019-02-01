// const sequelize = require('./database').sequelize;
// const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Email = sequelize.define('emails', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING(40),
            validate: {
                isEmail: true,
                notEmpty: true
            },
            allowNull: false
        },
        default: {
            type: Sequelize.BOOLEAN
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'emails',
    });

    return Email;
}
