import React from 'react';
import { useNavigate } from 'react-router-dom';
import LivroForm from '../components/LivroForm';
import api from '../services/api';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleCreate = async (livro) => {
    await api.post('/', livro);
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Novo Livro</h1>
      <LivroForm onSubmit={handleCreate} />
    </div>
  );
};

export default Cadastro;
