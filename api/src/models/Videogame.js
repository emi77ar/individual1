const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
    ID:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
     // autoIncrement: true,
      allowNull: false,
      primaryKey: true

    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Descripcion:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    Plataformas:{
      type: DataTypes.TEXT,
      allowNull: false

    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull: true

    },
    FechaDeLanzamiento:{
      type: DataTypes.DATEONLY
    },
    Rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }

    },
      {timestamps: false}
    );
};
