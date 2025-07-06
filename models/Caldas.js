import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Caldas = sequelize.define("caldas", {
  id_caldas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_calda: DataTypes.STRING,
  preco_calda: DataTypes.DECIMAL(10, 2),
}, {
  tableName: "calda",
  timestamps: false,
});

export default Caldas;