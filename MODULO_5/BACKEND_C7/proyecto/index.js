import express from "express";

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: 'Clean Code',
    },
    {
        id: 2,
        title: 'The pragmatic programmer',
    }
]

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/books/:id', (req, res) => {
    // const id = req.params.id 
    // desestructure
    const { id } = req.params

    const book = books.find((book) => book.id === parseInt(id))
    if(!book) {
        res.status(404).send('Book not found')
    }
    res.send(book)
})

// solo existe el body en post, put y patch
app.post('/books', (req, res) => {
    const newBook = req.body
    const existBook = books.some((book) => book.id === newBook.id)
    if(existBook) {
        res.status(400).send('Book already exists')
        return
    }
    books.push(newBook)
    res.send(newBook)
})

app.put('/books/:id', (req, res) => {
    const { id } = req.params
    const indexSelectBook = books.findIndex((book) => book.id === parseInt(id))
    if(indexSelectBook === -1) {
        res.status(404).send('Book not found')
        return
    }
    const newBook = req.body
    books[indexSelectBook] = {
        id: books[indexSelectBook].id, 
        title: newBook.title
    }
    res.send(newBook)
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params
    const indexSelectBook = books.findIndex((book) => book.id === parseInt(id))
    if(indexSelectBook === -1) {
        res.status(404).send('Book not found')
        return
    }
    books.splice(indexSelectBook, 1)
    res.send('Book deleted')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})