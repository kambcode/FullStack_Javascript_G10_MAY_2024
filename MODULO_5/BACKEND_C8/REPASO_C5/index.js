import http from "http";

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    if(req.url === '/' && req.method === 'GET'){
        res.statusCode = 200
        res.end('Home')
    }else if(req.url === '/about' && req.method === 'POST'){
        let body = ''
        // Recibir los datos del cliente
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            res.statusCode = 201
            res.end(`Crear un about ${body}`)
        })
    }else if(req.url.startsWith("/products/") && req.method === 'GET'){
        console.log(req.url)
        const id = req.url.split("/")[2]
        console.log(id)
        res.end('Productos')
    }
    else {
        res.statusCode = 404
        res.end('Not Found')
    }

    
})

server.listen('3000', () => console.log('Server is running on port 3000'))