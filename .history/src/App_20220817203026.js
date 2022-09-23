import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';

function App() {
   const arr = ['red', 'blue', 'black'];
   return (
      <div className="App">
         <TodoFeature />
      </div>
   );
}

export default App;
