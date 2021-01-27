const EncurterService = require("./encurter-service");

module.exports = (routes) => {
  const SERVICE = "/encurter";

  routes.get(`${SERVICE}`, EncurterService.list);

  routes.post(`${SERVICE}`, EncurterService.create);

  routes.get(`${SERVICE}/:id`, EncurterService.redirect);
};
