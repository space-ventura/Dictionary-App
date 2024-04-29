
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Opossum"/>
      </main>
      <footer className="app-footer"><small>This project was coded by Adele McKenna and is open-sourced on Github</small></footer>
      </div>
    </div>
  );
}

export default App;
