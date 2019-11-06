import React from 'react';
import './Controls.scss';

const Controls = props => {
    
    return (
        <div className='ctl-wrapper'>
            <button onClick={props.showPitchers}>Show Pitchers</button>
            <button onClick={props.showInfielders}>Show Infielders</button>
            <button onClick={props.showOutfielders}>Show Outfielders</button>
            <button onClick={props.showCatchers}>Show Catchers</button>
            <button onClick={props.getAllPlayers}>Show All</button>
        </div>
    )
}

export default Controls;