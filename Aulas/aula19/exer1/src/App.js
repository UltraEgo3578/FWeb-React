import logo from './logo.svg';
import './App.css';
import Welcome from './component1';
import Letsgo from './component2';
import User from './component3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Bem Vindo ao React!!
          </p>
            <Welcome name ="Receba" />
            <Letsgo name = "Receba" />
            <User/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
