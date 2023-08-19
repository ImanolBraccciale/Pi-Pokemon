const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo, es una estructura de un objeto en js que al momento de ser leido en la abse de datos se transforma en una tabla
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,  //le da un id unico
      defaultValue:DataTypes.UUIDV4, //agrega un uuid cuando agrego un elemento a la tabla
      primaryKey: true, // hace que cada pokemon sea unico y en la fila tambien

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, //quiero que este campo sea obligatorio
      unique:true, //especifico que el nombre de cada pokemon sera unico
    },
    image:{
      type:DataTypes.STRING,
       allowNull:false
    },
    hp:{
       type:DataTypes.STRING,
       allowNull:false,
        validate: { //quiero que sean positivos del 0 al 999
        min: 0,
        max: 999
      }
    },
    attack:{
        type:DataTypes.STRING,
       allowNull:false,
        validate: {
        min: 0,
        max: 999
      }
    },
    defense:{
      type:DataTypes.STRING,
       allowNull:false,
        validate: {
        min: 0,
        max: 999
      }
    },
    speed:{
      type:DataTypes.STRING,
       validate: {
        min: 0,
        max: 999
      }
    },
    height:{
      type:DataTypes.STRING,
       validate: {
        min: 0,
        max: 999
      }
    },
    weight:{
      type:DataTypes.STRING,
       validate: {
        min: 0,
        max:9999
      }
    }
  },{timestamps:false});
};


