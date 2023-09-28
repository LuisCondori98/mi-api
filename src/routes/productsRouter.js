import { Router } from "express";

export const productsRouter = Router()

productsRouter.get("/", (req, res) => {

  const prods = [
      {
        id: Math.floor(Math.random() * 1000000000),
        title: "Polos",
        price: 10,
        stock: 50,
        img: "/public/img/polo.jpg"
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Poleras",
        "price": 15,
        "stock": 30
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Faldas",
        "price": 8,
        "stock": 20
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Shorts",
        "price": 5,
        "stock": 10
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Jeans",
        "price": 12,
        "stock": 25
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Zapatillas",
        "price": 7,
        "stock": 15
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Buzos",
        "price": 9,
        "stock": 40
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Gorras",
        "price": 6,
        "stock": 35
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Chompas",
        "price": 11,
        "stock": 45
      },
      {
        id: Math.floor(Math.random() * 1000000000),
        "title": "Terno",
        "price": 14,
        "stock": 55
      }
    ]

  return res.json(prods)
})
