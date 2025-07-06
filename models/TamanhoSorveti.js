import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Tamanho from "./Tamanho.js";
import Sorvete from "./Sorvete.js";

const TamanhoSorvete = sequelize.define("tamanho_sorvete", {
  id_tamanho_sor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_sorvete: {
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
Tamanho.hasMany(TamanhoSorvete, { foreignKey: "id_tamanho" });
TamanhoSorvete.belongsTo(Tamanho, { foreignKey: "id_tamanho" });

// Sorveti 1:N DetalhePedido
Sorvete.hasMany(TamanhoSorvete, { foreignKey: "id_sorvete" });
TamanhoSorvete.belongsTo(Sorvete, { foreignKey: "id_sorvete" });

export default TamanhoSorvete;