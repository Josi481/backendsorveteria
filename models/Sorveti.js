import { DataTypes } from "sequelize";
import sequelize from "../database.js";


const Sorveti = sequelize.define("sorveti", {
  id_sorveti: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  preco_sorveti: DataTypes.DECIMAL(10, 2),
  sabor: DataTypes.STRING,
}, {
  tableName: "sorveti",
  timestamps: false,
});

// Sorveti N:N Tamanho
//Tamanho.belongsToMany(Sorveti, { through: 'tamanho_sorveti' ,foreignKey: 'id_tamanho',timestamps: false });
//Sorveti.belongsToMany(Tamanho, { through: 'tamanho_sorveti',foreignKey: 'id_sorveti', timestamps: false  });

export default Sorveti;