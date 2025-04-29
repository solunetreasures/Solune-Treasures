import './App.css';
import logo from './solune_logo_header.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Solune Treasures" className="logo" />
      </header>
      <main>
        <h2>Welcome to Solune Treasures</h2>
        <p>Your home for meaningful antiques and collectables.</p>
      </main>
    </div>
  );
}

export default App;
