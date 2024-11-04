import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida.js';
import Coches from './Coches.js';
import MiComponente from './MiComponente.js';
import FormularioAutoenfocado from './FormularioAutoenfocado.js';
import Contador from './Contador.js';

function App() {

  let content;

  const mensaje = true;

  if (mensaje) {
    content = <Saludo nombre="Carlos" />;
  } else {
    content = <Despedida nombre="Carlos" />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div><Contador></Contador>
        </div>
        <div>
          {content}
        </div>
        <div class="StyledTextComponent"> <Coches></Coches></div>
      </header>
    </div>
  );
}

export default App;
