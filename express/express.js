const express = require("express")
const fs = require("fs")

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`puerto ${PORT}`)
})

server.on("error", (error) => console.log("Error en el servidor: " + error))

//Lectura de los productos
const data = fs.readFileSync("../files/objects.txt", "utf-8")
const products = JSON.parse(data)

// Lista de los nombres de productos
const listadoNombres = []
const arrayProductos = () => {
    products.forEach(e => {
        listadoNombres.push(e.title) 
    });
    products = []
    return listadoNombres
}

// Randomizar producto elegido
const numeroRandom = () => {
    const numero = Math.floor(Math.random() * (products.length))
    return numero
};

app.get("/", (req, res) => {
    res.send("<h1>DESAFIO EXPRESS NINA SPINELLI</>")
})

// Renderizado de productos
app.get("/productos", (req, res) => {
    const respuesta =`
        <html>
            <body>
                <h1>PRODUCTOS</h1>
                <h2>Lista</h2>
                ${products.map(prod => (
                    `
                        <h3>${prod.title}</h3>
                        <p>$${prod.price}</p>
                        <img src="${prod.thumbnail}">
                    `
                ))}
                <h4>[${arrayProductos()}]</h4>
            </body>
        </html>
        `
    res.send(respuesta)
})

//Renderizado de item random
app.get("/productoRandom",(req, res) => {
    const respuesta =`
        <html>
            <body>
                <h1>PRODUCTO RANDOM</h1>
                <h2>${JSON.stringify(products[numeroRandom()].title)}</h2>
            </body>
        </html>
        `
        res.send(respuesta)
})

