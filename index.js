const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, ress) => {
  const corpo = req.body;
  console.log(corpo.cpf);
  return ress.json({ message: "teste" });
});

//app.get("/users/:cpf/:nome", (req, ress) => {
//const param = req.params;
//console.log(param);
//return ress.json({ message: "Não recebi" });
//});

app.listen(3333);
