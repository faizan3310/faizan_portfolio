import React, { useState } from 'react';
import EntityForm from './components/EntityForm';
import EntityList from './components/EntityList';
import './App.css';

function App() {
    const [entities, setEntities] = useState([]);

    const handleEntityCreated = (entity) => {
        setEntities([...entities, entity]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Headless CMS</h1>
            </header>
            <EntityForm onEntityCreated={handleEntityCreated} />
            <EntityList entities={entities} />
        </div>
    );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
*/