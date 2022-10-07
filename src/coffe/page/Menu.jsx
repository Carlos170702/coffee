import { useEffect, useState } from "react"
import { CarCoffee } from "../components"
import { getProducts } from "../controller/GetProduct"
import '../css/menu.css'
export const Menu = ({handleAdd}) => {


  const product = { "status": true, "msg": "Productos", "countDocs": 4, "products": [{ "_id": "631d71d2f22fb24842bbae42", "name": "CAFE ROJO ", "user": null, "price": 12, "category": { "_id": "631ab538a93c78947cd00f4c", "name": "CAFE" }, "description": "cafe de olla 9 estrellas", "available": true, "stock": 0, "image": "52ddd8ef-4aa0-47f1-9a8d-0f2c94357d2a.jpg" }, { "_id": "631e88eef3bfacbd5b428771", "name": "CAFE ", "user": null, "price": 19, "category": { "_id": "631ab538a93c78947cd00f4c", "name": "CAFE" }, "description": "cafe de prueba", "available": true, "stock": 176 }, { "_id": "631ffdee4587def9b128a984", "name": "CAFÉ ARÁBICA", "user": null, "price": 200, "category": { "_id": "631ab538a93c78947cd00f4c", "name": "CAFE" }, "description": "El tipo de café que más se utiliza y a su vez que más apreciado resulta es el que se corresponde con las primeras variantes utilizadas para elaborar la bebida: el café arábica.", "available": true, "stock": 8 }, { "_id": "632a7e8e936cbb7a959ea883", "name": "CAFÉ JAPONES", "user": null, "price": 200, "category": { "_id": "631ab538a93c78947cd00f4c", "name": "CAFE" }, "description": "El tipo de café que más se utiliza y a su vez que más apreciado resulta es el que se corresponde con las primeras variantes utilizadas para elaborar la bebida: el café arábica.", "available": true, "stock": 0 }] }

  return (
    <>
      <div className="card">
        {
          product.products.map(item => (
            <CarCoffee key={item._id} products={item} onclickAdd={handleAdd} />
          ))
        }
      </div>
    </>
  )
}
