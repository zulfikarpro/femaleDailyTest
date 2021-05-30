module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sales_db', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'sales_db',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'sales_db_pk',
        unique: true,
        fields: [
          { name: 'id' },
        ],
      },
    ],
  });
};
