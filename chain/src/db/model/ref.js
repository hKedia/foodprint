import Sequelize from 'sequelize';
import db from '../index';

const Ref = db.define('ref', {
    id: {
        field: 'id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true
    },
    batchId: {
        field: 'batch_id',
        type: Sequelize.DataTypes.INTEGER(),
        allowNull: false,
    },
    refId: {
        field: 'ref_id',
        type: Sequelize.DataTypes.INTEGER(),
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

module.exports = Ref;
