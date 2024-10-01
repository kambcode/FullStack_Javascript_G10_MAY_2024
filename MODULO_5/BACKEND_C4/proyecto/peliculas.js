import {writeFile, readFile} from "fs/promises"

const path = "peliculas.json"

// const createMovie = async (movies) => {
//     try{
//         const sendMovie = await writeFile(path, JSON.stringify(movies), 'utf8')
//         console.log(sendMovie)
//     } catch (error) {
//         console.log(error)
//     }
// }

const readMovies = async () => {
    try {
        const movies = await readFile(path, 'utf8')
        console.log(movies)
    } catch (error) {
        console.log(error)
    }
}
// createMovie([{title: "Titanic", year: 1997}]) 
readMovies()

