const config = require ("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.product = require("./product.model.js")(sequelize, Sequelize);


// db.role.belongsToMany(db.user, {
//     through: "user_roles",
//     foreignKey: "userId",
//     otherKey: "userId",
//     // as: "user_roles"
// });

// db.user.belongsToMany(db.user, {
//     through: "user_roles",
//     foreignKey: "userId",
//     otherKey: "roleId",
// });

db.ROLES = ["admin", "shopMod", "seller", "member"];

module.exports = db;