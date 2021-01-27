const { Router } = require("express");
const EncurterService = require("./app/encurter/encurter-service");
const routes = new Router();

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "Url Encurter UP!" });
});

require("./app/encurter/encurter-route")(routes);

routes.get(`/:id`, EncurterService.redirect);

module.exports = routes;
