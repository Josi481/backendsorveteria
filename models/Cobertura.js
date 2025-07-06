import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Cobertura = sequelize.define("cobertura", {
  id_cobertura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_cobertura: DataTypes.STRING,
  preco_cobertura: DataTypes.DECIMAL(10, 2),
}, {
  tableName: "cobertura",
  timestamps: false,
});

export default Cobertura;