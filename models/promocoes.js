import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Promocoes = sequelize.define("promocoes", {
  id_promocoes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descricao: DataTypes.STRING,
  preco_promo: DataTypes.DECIMAL(10, 2),
  data_ini: DataTypes.DATE,
  data_final: DataTypes.DATE,
}, {
  tableName: "promocoes",
  timestamps: false,
});

export default Promocoes;