import React from 'react';
import './Controls.scss';
import { Button } from 'semantic-ui-react'

const Controls = props => {
    
    return (
        <div className='ctl-wrapper'>
            <Button onClick={props.showPitchers} color='green' size='medium'>Show Pitchers</Button>
            <Button onClick={props.showInfielders} color='green' size='medium'>Show Infielders</Button>
            <Button onClick={props.showOutfielders} color='green' size='medium'>Show Outfielders</Button>
            <Button onClick={props.showCatchers} color='green' size='medium'>Show Catchers</Button>
            <Button onClick={props.getAllPlayers} color='green' size='medium'> Show All </Button>
        </div>
    )
}

export default Controls;