import React from 'react';
import './Controls.scss';
import { Button } from 'semantic-ui-react'

const Controls = props => {
    
    return (
        <div className='ctl-wrapper'>
            <Button onClick={props.showPitchers} color='green'>Show Pitchers</Button>
            <Button onClick={props.showInfielders} color='green'>Show Infielders</Button>
            <Button onClick={props.showOutfielders} color='green'>Show Outfielders</Button>
            <Button onClick={props.showCatchers} color='green'>Show Catchers</Button>
            <Button onClick={props.getAllPlayers} color='green'>Show All</Button>
        </div>
    )
}

export default Controls;