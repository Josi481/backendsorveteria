import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Tamanho = sequelize.define("tamanho", {
  id_tamanho: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tamanho_ml: DataTypes.STRING,
}, {
  tableName: "tamanho",
  timestamps: false,
});

export default Tamanho;