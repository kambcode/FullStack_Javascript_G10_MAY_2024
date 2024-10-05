import http from 'http';

// CRUD = Create = Crear, post, Read = Leer, get
// Update = Actualizar, PUT | PATCH, Delete = Borrar, Delete

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

// req = request = petición, res = response = respuesta
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    console.log(req.method)
    if(req.url === '/'){
        res.statusCode = 200
        res.end('Home')
    }else if(req.url === '/about'){
        res.statusCode = 200
        res.end('About')
    }else if(req.url === '/books' && req.method === 'GET'){
        res.statusCode = 200
        res.end('Lista de libros Books')
    }else if(req.url.startsWith('/books/') && req.method === 'GET'){
        console.log(req.url)
        console.log(req.url.split('/'))
        const id = req.url.split('/')[2]
        const selectedBook = books.find((book) => book.id === parseInt(id))
        if(!selectedBook){
            res.statusCode = 404
            res.end('Book not found')
            return
        }
        res.statusCode = 200
        res.end(`Tu Libro es: ${selectedBook.title}`)
    }else if(req.url === '/books' && req.method === 'POST'){
        let body = ''
        // Recibir los datos del cliente
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            res.statusCode = 201
            res.end(`Crear un libro ${body}`)
        })
    }else{
        res.statusCode = 404
        res.end('Not Found')
    }
})

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('hello world')
// })

server.listen(3002, () => {
    console.log('Server is running on port 3000')
})