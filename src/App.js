import logo from './gym.jpg';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        <a
          className="App-link"
          href="workOut.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to hit your fitness goals!
        </a>
      </header>
    </div>
  );
}

export default App;