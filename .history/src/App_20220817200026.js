import logo from './logo.svg';
import './App.css';

function App() {
   const arr = ['red', 'blue', 'white'];
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Le Cong Tuan</p>
            <ul>
               {arr.map((items) => (
                  <li style={{ color: items }}>{items}</li>
               ))}
            </ul>
         </header>
      </div>
   );
}

export default App;
