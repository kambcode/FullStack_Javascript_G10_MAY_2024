import { useState, useEffect } from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown";


function App() {
   const [data, setData] = useState([])
   const [question, setQuestion] = useState('')
   const [loading, setLoading] = useState(false)

   useEffect(() => {
    if(!loading) return
    axios.post('http://localhost:3000/recetas', {
      message: `Eres un chef profesional, solo conoces de comida, te voy a preguntar acerca de recetas, si te envio o pregunto por algo que no sea comida por favor respondeme que no sabes del tema ahora Quiero la receta de: ${question}`
    }).then((response) => {
     setData(response.data) 
     setLoading(false)
    })
   }, [loading])

   const handleSubmit = (e) => {
     e.preventDefault()
     setLoading(true)
   }

  return (
   <div>
    <h2>Cocinando con IA</h2>
    <form onSubmit={handleSubmit}>
      <input 
        onChange={(e) => setQuestion(e.target.value)} 
        type="text" 
        placeholder="Nombre de la receta" 
      />
      <button type="submit">Generar</button>
    </form>
    {loading && <p>Cargando...</p> }
    {data && data.length > 0 && (
      <div className="markdown-container">
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    )}  
      
    
    
   </div>     
  )
}

export default App
