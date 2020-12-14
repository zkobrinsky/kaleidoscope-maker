import logo from './logo.svg';
import './App.css';
import Sketch from './components/sketch'

function App() {
  return (
    <div className="App">
      <h1>This is a header</h1>
      <div className="p5_sketch">
        < Sketch angle={0} rotateRate={0.5}/>
      </div>
      <button >button</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
