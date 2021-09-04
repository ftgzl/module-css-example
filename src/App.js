import './App.css';
import FirstComponent from './components/FirstComponent.js';
import SecondComponent from './components/SecondComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <SecondComponent />
      </header>
    </div>
  );
}

export default App;
