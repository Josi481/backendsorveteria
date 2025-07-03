import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Pedido from "./Pedido.js";
import Sorveti from "./Sorveti.js";
import Cobertura from "./Cobertura.js";
const DetalhePedido = sequelize.define("detalhe_pedido", {
  id_detalhe: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_sorveti: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cobertura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "detalhe_pedido",
  timestamps: false,
});
// Pedido 1:N DetalhePedido
Pedido.hasMany(DetalhePedido, { foreignKey: "id_pedido" });
DetalhePedido.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Sorveti 1:N DetalhePedido
Sorveti.hasMany(DetalhePedido, { foreignKey: "id_sorveti" });
DetalhePedido.belongsTo(Sorveti, { foreignKey: "id_sorveti" });

Cobertura.hasMany(DetalhePedido, { foreignKey: "id_cobertura" });
DetalhePedido.belongsTo(Cobertura, { foreignKey: "id_cobertura" });

export default DetalhePedido;