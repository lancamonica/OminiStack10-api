const { Router } = require("express");

const routes = Router();

routes.post("/users", (req, ress) => {
  const corpo = req.body;
  console.log(corpo.cpf);
  return ress.json({ message: "teste" });
});

module.exports = routes;
