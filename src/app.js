import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { productsRouter } from './routes/productsRouter.js';

const app = express();

const PORT = 8080

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "luisbarker11@gmail.com",
    pass: "rszm xorv cuey dqze"
  }
})

app.get("/mail/:email", async (req, res) => {

  const email = req.params.email

  console.log(email)

  let result = await transport.sendMail({
    from: "SteelEcht <msm@gmail.com>",
    to: email,
    subject: "Compra realizada con exito",
    html: `
          <div>
            <h1>Gracias por su compra mi estimado</h1>
            <img src='cid:perrito'/>
          </div>`,
    attachments: [{
      filename: "perrito.webp",
      path: "./public/img/polo.jpg",
      cid: "perrito"
    }]
  })

  return res.json({status: "success"})
})

app.get("/", (req, res) => {

  return res.json({
    status: "success",
    date: new Date().toLocaleString()
  })
})

app.use("/api/products", productsRouter)

app.listen(PORT, (req, res) => console.log(`Listening on http://localhost:${PORT}`))
