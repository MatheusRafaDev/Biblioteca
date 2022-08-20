import initdb from '../models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'matheusrafazz',
'matheusrafazz',
'10092004', {
host: 'db4free.net',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;