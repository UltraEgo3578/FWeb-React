import './App.css';
import './components/User';
import './components/Password';
import './components/Login';

function App() {
  return (
    <div className="container">
      <div className='login'>
        <h1>Login</h1>
        <div id="info">
          <h3>Username</h3>
          <input id='usuario' type='text'></input>
          <h3>Password</h3>
          <input id='senha' type='password'></input>
        </div>
        <button id="log" type='button'>Login</button>
      </div>
    </div>
  );
}



export default App;
