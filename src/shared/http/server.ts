import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  return response.json({message: 'Olá Dev'})
})

app.listen(3001, () => {
  console.log('Server estarted on port 3001!')
})
