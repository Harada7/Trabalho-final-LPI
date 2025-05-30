const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const livroRoutes = require('./routes/livrosRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/livros', livroRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Backend rodando na porta ${PORT}`)
    );
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
