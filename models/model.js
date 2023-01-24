import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize("store_db", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    port: '3333'
});

export {sequelize, DataTypes}