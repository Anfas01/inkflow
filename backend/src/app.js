import express from 'express'
import cors from 'cors'

import authRoute from './routes/authRoute.js'
import noteRoute from './routes/noteRoute.js'

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(",") || true }));
app.use(express.json({ limit: "100kb" }));

app.get('/', (req, res) => {
  res.json({ success: true, message: "InkFlow API is running." });
});

app.use('/api/auth', authRoute);
app.use('/api/note', noteRoute);

export default app;
