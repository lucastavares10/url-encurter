const { Sequelize } = require("sequelize");
const config = require("config");
const pg = config.get("postgres");

const sequelize = new Sequelize(pg.database, pg.username, pg.password, {
  host: pg.host,
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(console.log(`Conectado com sucesso ao POSTGRES!`))
  .catch((error) => {
    console.log(`** Erro ao conectar com o Postgres! **`);
    console.log(`** ${error} **`);
  });

sequelize.sync();
//sequelize.sync({ force: true });

module.exports = sequelize;
