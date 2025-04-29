import './App.css';
import logo from './solune_logo_header.png';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
        <img src={logo} alt="Solune Treasures" style={{ maxWidth: '300px' }} />
      </header>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Welcome to Solune Treasures</h2>
        <p>Your source for timeless antiques, collectibles, and soulful objects.</p>
      </main>
    </div>
  );
}

export default App;
