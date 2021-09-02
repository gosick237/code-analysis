import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  const getScoreNCS = async () => {
    axios.get("/test").then((response) => {
      console.log(response.data.test);
    });
  };

  useEffect(() => {
    getScoreNCS();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <div>test</div>
    </div>
  );
}

export default App;
