// console.log("Hello Anita desde backend/index.js");

import express from 'express'
import cors from 'cors' 

// Configurar CORS para permitir solicitudes desde el frontend

const app = express()
app.use(cors()) // habilitar CORS para todas las rutas o solicitudes 

//Definir rutas
app.get('/', (req, res) => {
  res.send('Hello Anitaaa')
})

app.get('/ping', (req, res) => {
  res.json ({ message: 'ponggg' })
})

app.listen(3030)


