import { DataTypes } from "sequelize";
import sequelize from "../database.js";


const Sorvete = sequelize.define("sorvete", {
  id_sorvete: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sabor: DataTypes.STRING,
  preco_sorvete: DataTypes.DECIMAL(10, 2),
  imagem: DataTypes.STRING,
}, {
  tableName: "sorvete",
  timestamps: false,
});



export default Sorvete;