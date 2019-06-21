import Sequelize from 'sequelize';
import db from '../index';

const UserModel = db.define('user', {
    iD: {
        field: 'id',
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    Bio: {
        field: 'bio',
        type: Sequelize.DataTypes.BOOLEAN
    },
    Name: {
        field: 'name',
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Blockchain_iD: {
        field: 'blockchain_id',
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Digital_cert: {
        field: 'digital_cert',
        type: Sequelize.DataTypes.STRING
    }
}, {
    paranoid: true, // Support soft delete with 'deleted_at'
    underscored: true, // Make timestamp fields with underscores
});

module.exports = UserModel;
