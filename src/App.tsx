import logo from "logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OMG this is your first React App with ESBuild 🚀</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and reload the browser to see the new changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://esbuild.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ESbuild
        </a>
        <a
          className="App-link"
          href="https://github.com/jleonardo007/react-esbuild-template-ts-version"
          target="_blank"
          rel="noopener noreferrer"
        >
          Template Repo
        </a>
        <p>
          Development template crafted by{" "}
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jleonardo007"
          >
            Leonardo Bravo
          </a>
        </p>
      </header>
    </div>
  );
}
