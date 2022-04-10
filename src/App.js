import BarraAcoes from './components/barraAcoes';
import Input from './components/input';
import ContainerNotas from './components/notas';
import ProviderNotas from './contexts';
import './index.css';

function App() {

  return (
    <ProviderNotas>
      <div className="App">
        
        <Input />
        <ContainerNotas  />
        <BarraAcoes/>
      </div>
    </ProviderNotas>
    
    
  );
}

export default App;
