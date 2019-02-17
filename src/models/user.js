module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            field: 'first_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        profileImage: {
            field: 'profile_image',
            type: Sequelize.STRING,
            allowNull: true
        },
        coverImage: {
            field: 'cover_image',
            type: Sequelize.STRING,
            allowNull: true
        },
        lastName: {
            field: 'last_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        bio: {
            field: 'bio',
            type: Sequelize.STRING,
            allowNull: true
        },
        age: {
            type: Sequelize.INTEGER,
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
            allowNull: true
        },
        email: {
            type: Sequelize.STRING(40),
            validate: {
                isEmail: true,
                notEmpty: true
            },
            allowNull: false
        },
        gender: {
            type: Sequelize.ENUM('M', 'F'),
            allowNull: true
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
        User.hasMany(models.phones);
        User.belongsTo(models.addresses);
        User.belongsTo(models.profiles);
    };

    return User;
}