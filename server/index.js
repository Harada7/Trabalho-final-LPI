const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
import path from 'path';
import { fileURLToPath } from 'url';

const livrosRoutes = require('./routes/livrosRoutes.js');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/livros', livrosRoutes);
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Backend rodando na porta ${PORT}`)
    );
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
