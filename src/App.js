import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida.js';
import Coches from './Coches.js';


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
        <div>
          {content}
        </div>
        <div class="StyledTextComponent"> <Coches></Coches></div>
      </header>
    </div>
  );
}

export default App;
