import express from 'express'
import cors from 'cors'

import authRoute from './routes/authRoute.js'
import noteRoute from './routes/noteRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', authRoute)
app.use('/api/note', noteRoute)

export default app