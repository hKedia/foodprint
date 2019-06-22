import Sequelize from 'sequelize';
import db from '../index';

const Product = db.define('product', {
    id: {
        field: 'id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true
    },
    prodId: {
        field: 'prod_id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
    },
    name: {
        field: 'name',
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
    }
}, {
    paranoid: true, // Support soft delete with 'deleted_at'
    underscored: true, // Make timestamp fields with underscores
    indexes: [
        {
            fields: ['id']
        },
    ]
});




module.exports = Product;
