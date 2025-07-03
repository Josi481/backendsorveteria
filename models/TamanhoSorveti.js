import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Tamanho from "./Tamanho.js";
import Sorveti from "./Sorveti.js";

const TamanhoSorveti = sequelize.define("tamanho_sorveti", {
  id_tamanho_sor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_sorveti: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_tamanho: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
}, {
  tableName: "tamanho_sorveti",
  timestamps: false,
});

// Pedido 1:N DetalhePedido
Tamanho.hasMany(TamanhoSorveti, { foreignKey: "id_tamanho" });
TamanhoSorveti.belongsTo(Tamanho, { foreignKey: "id_tamanho" });

// Sorveti 1:N DetalhePedido
Sorveti.hasMany(TamanhoSorveti, { foreignKey: "id_sorveti" });
TamanhoSorveti.belongsTo(Sorveti, { foreignKey: "id_sorveti" });

export default TamanhoSorveti;