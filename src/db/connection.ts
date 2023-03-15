import { Sequelize } from "sequelize";

const sequelize = new Sequelize ('almacen', 'root', 'Abrahammercado128@',{
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;