import express, { json } from "express";
import cors from "cors";
import {categoryRouter}  from "./routes/categoriesRoutes.js";
import { productRouter } from "./routes/productsRoutes.js";


const app = express();
app.use(cors())
app.use(json())

// Routes
app.use(categoryRouter)
app.use(productRouter)




// Port
const port = process.env.PORT

app.listen(port, ()=> {
  console.log(`Servidor corriendo exitosamente ${port}`)
})