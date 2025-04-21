const express = require("express");
const routes = require("./router/router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config();

// Crear servidor
const app = express();

// Conectar a la base de datos
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conexión con MongoDB exitosa"))
  .catch((err) => console.error(err));

// Habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Obtener rutas de la app
app.use("/api", routes());

// Establecer puerto
const port = process.env.PORT || 3000;
app.listen(port);
