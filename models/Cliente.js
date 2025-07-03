import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Cliente = sequelize.define("cliente", {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_cliente: DataTypes.STRING,
  endereco: DataTypes.STRING,
  CEP: DataTypes.STRING,
}, {
  tableName: "cliente",
  timestamps: false,
});

export default Cliente;