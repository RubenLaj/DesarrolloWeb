import {Sequelize} from 'sequelize'

const db = new Sequelize ('database_app', 'admin', 'root2023',{
    host:'database-desarrollo.cmawdcao9wxi.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

export default db