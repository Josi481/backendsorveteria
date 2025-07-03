import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect:"sqlite",
    storage: "sorveteria.sqlite"
})
export default sequelize;