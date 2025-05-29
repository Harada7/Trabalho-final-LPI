import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LivroForm from '../components/LivroForm';
import api from '../services/api';

const Editar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    api.get(`/${id}`).then(res => setLivro(res.data));
  }, [id]);

  const handleUpdate = async (dadosAtualizados) => {
    await api.put(`/${id}`, dadosAtualizados);
    navigate('/');
  };

  if (!livro) return <p>Carregando...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Editar Livro</h1>
      <LivroForm onSubmit={handleUpdate} initialData={livro} />
    </div>
  );
};

export default Editar;
