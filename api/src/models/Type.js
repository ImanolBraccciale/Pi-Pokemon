const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
  sequelize.define('type',{
    id: { //no usar UUID porque es un dolor buscarlo despues
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name:{
       type:DataTypes.STRING,
       allowNull:false,
       unique:true
    }
  },{
    timestamps : false //no quiero ver la hora y fecha de creacion
  })
}