import express from "express";
import cors from 'cors'

const app = express();
const port = 3000

app.use(cors())

app.get('/', (req, res) =>{
  res.status(200).json({
    message: "Connected"
  })
})

app.listen(port, ()=> {
  console.log(`Servidor corriendo exitosamente ${port}`)
})