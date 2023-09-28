import express from 'express';
import cors from 'cors';
import { productsRouter } from './routes/productsRouter.js';

const app = express();

const PORT = 8080

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {

  return res.json({
    status: "success",
    date: new Date().toLocaleString()
  })
})

app.use("/api/products", productsRouter)

app.listen(PORT, (req, res) => console.log(`Listening on http://localhost:${PORT}`))
