import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import Cliente from "./Cliente.js";

const Pedido = sequelize.define("pedido", {
  id_pedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_pedido: DataTypes.DATE,
  total_pedido: DataTypes.DECIMAL(10, 2),
}, {
  tableName: "pedido",
  timestamps: false,
});
// Cliente 1:N Pedido
Cliente.hasMany(Pedido, { foreignKey: "id_cliente" });
Pedido.belongsTo(Cliente, { foreignKey: "id_cliente" });
export default Pedido;
