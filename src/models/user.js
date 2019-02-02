module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        firstName: {
            field: 'first_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            field: 'last_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING(11),
            validate: {
                not: ["[a-z]", 'i']
            },
            allowNull: true
        },
        cnpj: {
            type: Sequelize.STRING(20),
            validate: {
                not: ["[a-z]", 'i']
            },
            allowNull: true
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        birthDate: {
            field: 'birth_date',
            validate: {
                isDate: true
            },
            type: Sequelize.DATE,
            allowNull: false
        },
        gender: {
            type: Sequelize.ENUM('M', 'F'),
            allowNull: false
        },
        active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        loggedAt: {
            field: 'logged_at',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
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
        tableName: 'users',
    });

    User.associate = function (models) {
        User.hasMany(models.emails);
        User.hasMany(models.phones);
        User.belongsTo(models.profiles);
    };

    return User;
}