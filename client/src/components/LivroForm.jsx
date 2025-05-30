import { useState, useEffect } from 'react';
import api from "../services/api";

export default function LivroForm({ livroAtual, limparEdicao, recarregar }) {
  const [form, setForm] = useState({ titulo: '', autor: '' });

  useEffect(() => {
    if (livroAtual) setForm(livroAtual);
  }, [livroAtual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._id) {
      await api.put(`/${form._id}`, form);
    } else {
      await api.post('/', form);
    }
    setForm({ titulo: '', autor: '' });
    limparEdicao();
    recarregar();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-bold mb-4">{form._id ? '✏️ Editar Livro' : '➕ Adicionar Livro'}</h2>
      <input
        type="text"
        name="titulo"
        value={form.titulo}
        onChange={handleChange}
        placeholder="Título"
        className="block mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="text"
        name="autor"
        value={form.autor}
        onChange={handleChange}
        placeholder="Autor"
        className="block mb-2 p-2 border rounded w-full"
        required
      />
      <button className="px-4 py-2 bg-green-600 text-white rounded">
        {form._id ? 'Atualizar' : 'Cadastrar'}
      </button>
    </form>
  );
}
