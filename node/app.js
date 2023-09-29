import express from "express"
import cors from 'cors'

//importar conexion a db
import db from "./database/db.js"

//importar enrutado
import blogRoutes from  './routes/routes.js'

const app = express()

app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la db')
} catch (error) {
    console.log(`Error a la db' ${error}`)
}


app.get('/', (req,res) =>{
    res.send('hola mundo')
})

app.listen(8000, ()=>{
    console.log('Server up running in http://localhost:8000/')
})