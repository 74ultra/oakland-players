import React from 'react';
import aslogo from '../../img/aslogo.png';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const MainHeader = props => {

    return (
      <div>
        <div className='main-header'>
            <img src={aslogo} alt='Athletics logo'></img>
            <Header as='h1'>2019</Header>
            <Header as='h2'>Oakland Athletics</Header>
            <Link to='/team'><Button>View Team Roster</Button></Link>
        </div>
      </div>
    )
}

export default MainHeader;