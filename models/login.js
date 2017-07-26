
    
  'use strict';
module.exports = function(sequelize, DataTypes) {
  var login = sequelize.define('login,{
    
    
    name : {
      type : DataTypes.STRING,
      allowNull : true
    },

    age : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    gender : {
      type : DataTypes.STRING,
      allowNull : true
    },
    city : {
      type : DataTypes.STRING,
      allowNull : true
    },
    email : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    }
    
    
    }, {
    tableName : 'login
    freezeTableName : true,
    timestamps : true,
    underscored : true
  });
  login.sync()
  return user_info;
};