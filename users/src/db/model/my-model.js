import Sequelize from 'sequelize';
import db from '../index';

const MyModel = db.define('my-model', {
    field1CamelCase: {
        field: 'field1_camel_case',
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    field2: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
    }
}, {
    paranoid: true, // Support soft delete with 'deleted_at'
    underscored: true, // Make timestamp fields with underscores
    indexes: [
        {
            fields: ['field2']
        },
    ]
});

module.exports = MyModel;
