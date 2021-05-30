var DataTypes = require("sequelize").DataTypes;
var _sales_db = require("./sales_db");

function initModels(sequelize) {
  var sales_db = _sales_db(sequelize, DataTypes);


  return {
    sales_db,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
