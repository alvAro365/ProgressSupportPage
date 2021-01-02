// import logo from './logo.svg';
import logo from "./app_icon.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href={"mailto:a.aronija@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send email
        </a>
      </header>
    </div>
  );
}

export default App;
