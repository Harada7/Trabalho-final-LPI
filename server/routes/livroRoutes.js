const express = require('express');
const {
  getLivros,
  getLivro,
  createLivro,
  updateLivro,
  deleteLivro,
} = require('../controllers/livroController');

const router = express.Router();

router.get('/', getLivros);
router.get('/:id', getLivro);
router.post('/', createLivro);
router.put('/:id', updateLivro);
router.delete('/:id', deleteLivro);

module.exports = router;
