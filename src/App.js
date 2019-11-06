import React from 'react';
import './App.scss';
import aslogo from './img/aslogo.png';
import Team from './components/Team/Team.js';
import { Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <div className='main-header'>
        <img src={aslogo} alt='Athletics logo'></img>
        <Header as='h1'>2019</Header>
        <Header as='h2'>Oakland Athletics</Header>
        
      </div>
      <Team />
    </div>
  );
}

export default App;
