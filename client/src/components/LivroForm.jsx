import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const labels = {
  titulo: 'Título',
  autor: 'Autor',
  categoria: 'Categoria',
  descricao: 'Descrição',
  imagem: 'URL da imagem',
};

const LivroForm = ({ onSubmit, initialData = {} }) => {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    categoria: '',
    descricao: '',
    imagem: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setLivro(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const camposVazios = Array.from(formData.entries()).filter(
      ([_, value]) => !String(value || '').trim()
    );

    if (camposVazios.length > 0) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const livroData = Object.fromEntries(formData.entries());

    const sucesso = await onSubmit(livroData);
    if (sucesso) {
      setLivro({
        titulo: '',
        autor: '',
        categoria: '',
        descricao: '',
        imagem: '',
      });
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      {Object.keys(labels).map((field) => (
        <div key={field} className="flex flex-col">
          <label htmlFor={field} className="sr-only">
            {labels[field]}
          </label>
          <input
            id={field}
            name={field}
            value={livro[field]}
            onChange={handleChange}
            placeholder={labels[field]}
            className="
              w-full
              bg-gray-800
              text-gray-200
              border
              border-gray-600
              rounded-md
              px-4
              py-3
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-transparent
              transition
            "
          />
        </div>
      ))}

      <button
        type="submit"
        className="
          w-full
          bg-green-600
          hover:bg-green-700
          transition-colors
          text-white
          font-semibold
          py-3
          rounded-md
          shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
          focus:ring-opacity-75
          cursor-pointer
        "
      >
        Salvar
      </button>
    </form>
  );
};

export default LivroForm;
