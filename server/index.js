import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import livrosRoutes from './routes/livrosRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/livros', livrosRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Backend rodando na porta ${PORT}`)
    );
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
