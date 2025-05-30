import { useState } from 'react';
import LivroForm from './components/LivroForm';
import LivroList from './components/LivroList';

function App() {
  const [livroEditando, setLivroEditando] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white rounded shadow">
      <LivroForm
        livroAtual={livroEditando}
        limparEdicao={() => setLivroEditando(null)}
        recarregar={() => setRefresh(!refresh)}
      />
      <LivroList onEdit={setLivroEditando} key={refresh} />
    </div>
  );
}

export default App;
