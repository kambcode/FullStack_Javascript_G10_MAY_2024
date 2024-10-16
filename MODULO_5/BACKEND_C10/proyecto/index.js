import express from 'express'
import "dotenv/config.js"
import axios from 'axios'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/recetas', async(req, res) => {
    const { body } = req
    console.log(body.message)
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        "model": "gpt-4o-mini",
        "messages": [
            {"role": "user", "content": body.message}
        ]
    },
    {
        headers: {
            'Authorization' : `Bearer ${process.env.API_KEY_OPEN_AI}`
        }
    })
    const { data } = response
    res.send(data.choices[0].message.content)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
}) 