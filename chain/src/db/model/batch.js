import Sequelize from 'sequelize';
import db from '../index';

const Batch = db.define('batch', {
    id: {
        field: 'id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true
    },
    productId: {
        field: 'product_id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
    },
    organic: {
        field: 'organic',
        type: Sequelize.DataTypes.BOOLEAN(),
        allowNull: false,
    },
    price: {
        field: 'price',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
    },
    weight: {
        field: 'weight',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
    },
    transactionId: {
        field: 'transaction_id',
        type: Sequelize.DataTypes.TEXT('medium'),
        allowNull: false,
    },
    ownerId: {
        field: 'owner_id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
    },
    type: {
        field: 'type',
        type: Sequelize.DataTypes.TEXT('medium'),
        allowNull: false,
    },
}, {
    paranoid: true, // Support soft delete with 'deleted_at'
    underscored: true, // Make timestamp fields with underscores
    indexes: [
        {
            fields: ['id']
        },
    ]
});

module.exports = Batch;
