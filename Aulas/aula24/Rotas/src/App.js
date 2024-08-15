import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Calculadora from './components/PageCalc';
import Contador from './components/PageCounter';
import Form from './components/PageNmFr';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calculadora/>}></Route>
          <Route path='/contador' element={<Contador/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
