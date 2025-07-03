import Cliente from "./Cliente.js";
import Pedido from "./Pedido.js";
import Sorveti from "./Sorveti.js";
import Cobertura from "./Cobertura.js";
import DetalhePedido from "./DetalhePedido.js";

// Cliente 1:N Pedido
Cliente.hasMany(Pedido, { foreignKey: "id_cliente" });
Pedido.belongsTo(Cliente, { foreignKey: "id_cliente" });

// Pedido 1:N DetalhePedido
Pedido.hasMany(DetalhePedido, { foreignKey: "id_pedido" });
DetalhePedido.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Sorveti 1:N DetalhePedido
Sorveti.hasMany(DetalhePedido, { foreignKey: "id_sorveti" });
DetalhePedido.belongsTo(Sorveti, { foreignKey: "id_sorveti" });

// Cobertura 1:N DetalhePedido
Cobertura.hasMany(DetalhePedido, { foreignKey: "id_cobertura" });
DetalhePedido.belongsTo(Cobertura, { foreignKey: "id_cobertura" });

export {
  Cliente,
  Pedido,
  Sorveti,
  Cobertura,
  DetalhePedido
};