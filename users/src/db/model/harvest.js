import Sequelize from 'sequelize';
import db from '../index';

const harvestModel = db.define('harvest', {
    iD: {
        field: 'id',
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    Date: {
        field: 'date',
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    Prod_id: {
        field: 'prod_id',
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Waste: {
        field: 'waste',
        type: Sequelize.DataTypes.BOOLEAN
    }
}, {
    paranoid: true, // Support soft delete with 'deleted_at'
    underscored: true, // Make timestamp fields with underscores
});

module.exports = harvestModel;
