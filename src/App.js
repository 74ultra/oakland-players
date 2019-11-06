import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.scss';
import MainHeader from './components/MainHeader/MainHeader.js';
import Team from './components/Team/Team.js';
import { Menu } from 'semantic-ui-react';
import asLogosm from './img/aslogo-sm.png';


function App() {
  return (
    <div className="App">
      <Menu>
        <Menu.Item>
          <img src={asLogosm} alt='small-logo' />
        </Menu.Item>
        <Link to='/'>
          <Menu.Item 
            name='Home'
          />
        </Link>
        <Link to='/team'>
          <Menu.Item 
            name='Team Roster'
          />
        </Link>
      </Menu>
      <Route exact path='/' component={MainHeader} />
      <Route exact path='/team' component={Team} />
    </div>
  );
}

export default App;
