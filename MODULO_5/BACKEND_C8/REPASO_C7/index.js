import express from "express";

const products = [
    {
        id: 1,
        name: 'iPhone',
        price: 1000,
    },
    {
        id: 2,
        name: 'Macbook',
        price: 5000,
    },
    {
        id: 3,
        name: 'Laptop',
        price: 2000,
    }
]


const app = express();

app.use(express.json())
// CRUD = Create, Read, Update, Delete
// CRUD = Crear, Leer, Actualizar, Borrar
// get = leer, post = crear, put = actualizar, delete = borrar
app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const selectedProduct = products.find((product) => {
        return product.id === parseInt(id)
    })
    if(!selectedProduct){
        res.status(404).send('Product not found')
        return
    }
    res.send(selectedProduct)
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    const indexProduct = products.findIndex((product) => {
        return product.id === parseInt(id)
    })
    if(indexProduct === -1){
        res.status(404).send('Product not found')
        return
    }
    products.splice(indexProduct, 1)
    res.send('Product deleted')
})

app.post('/products', (req, res) => {
    const newProduct = req.body
    const existProduct = products.some((product) => {
        return product.id === newProduct.id
    })
    if(existProduct){
        res.status(400).send('Product already exists')
        return
    }
    products.push(newProduct)
    res.send(newProduct)
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const indexProduct = products.findIndex((product) => {
        return product.id === parseInt(id)
    })
    if(indexProduct === -1){
        res.status(404).send('Product not found')
        return
    }
    const newDataProduct = req.body
    products[indexProduct] = newDataProduct
    res.send(newDataProduct)
    
})

app.listen('3000', () => {
    console.log('Server is running on port 3000')
})