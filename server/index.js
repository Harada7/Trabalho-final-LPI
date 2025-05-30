const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const livroRoutes = require('./routes/livrosRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/livros', livroRoutes);

// Servir o frontend (React) buildado
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Conexão com MongoDB + Iniciar servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Backend rodando na porta ${PORT}`)
    );
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
