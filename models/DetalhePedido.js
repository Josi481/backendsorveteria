import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Pedido from "./Pedido.js";
import Sorvete from "./Sorvete.js";
import Cobertura from "./Cobertura.js";
import Caldas from "./Caldas.js";
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
  id_sorvete: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cobertura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_calda: {
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
Sorvete.hasMany(DetalhePedido, { foreignKey: "id_sorvete" });
DetalhePedido.belongsTo(Sorvete, { foreignKey: "id_sorvete" });

Cobertura.hasMany(DetalhePedido, { foreignKey: "id_cobertura" });
DetalhePedido.belongsTo(Cobertura, { foreignKey: "id_cobertura" });

Caldas.hasMany(DetalhePedido, { foreignKey: "id_caldas" });
DetalhePedido.belongsTo(Cobertura, { foreignKey: "id_caldas" });

export default DetalhePedido;