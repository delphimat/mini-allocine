import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {SearchAppBar} from './Home';

const App: React.FC = () => {
  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <SearchAppBar />
    </div>
  
  );
}

export default App;
