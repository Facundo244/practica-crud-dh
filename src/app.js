// Módulos
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override"); // Parcheamos nuestro formulario para trabajar con PUT y DELETE

const mainRouter = require("./routes/mainRouter");
const productRouter = require("./routes/productRouter")

// Configuración
// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());                                  // estas 2 ultimas lineas es importante que siempre esten , para que llegue la informacion al body

// Routers
app.use("/", mainRouter);
app.use("/products" , productRouter)

app.listen(3000, () => {
  console.log("Servidor arriba en el puerto 3000");
});
