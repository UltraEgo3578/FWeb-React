import './App.css';
import './Welcome.css';
import './Inputext.css';
import './Button.css'

import Welcome from './components/Welcome';
import Inputext from './components/Inputext';
import Button from './components/Button';

function App() {
  return (
    <div className="container">
      <Welcome name ={prompt("Qual o seu Nome?")} />
      <Inputext/>
      <Button/>
    </div>
  );
}

export default App;
