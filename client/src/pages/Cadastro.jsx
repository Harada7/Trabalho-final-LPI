import LivroForm from '../components/LivroForm';
import api from '../services/api';

const Cadastro = () => {

  const handleCreate = async (livro) => {
    try {
      const res = await api.post('/', livro);
      return !!res.data
    } catch (error) {
      alert('Erro ao cadastrar livro. Tente novamente.');
      console.error('Erro ao cadastrar livro:', error);
      return false;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-4">Cadastrar Novo Livro</h1>
      <LivroForm onSubmit={handleCreate} />
    </div>
  );
};

export default Cadastro;
