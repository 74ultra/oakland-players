import React from 'react';
import { Card } from 'semantic-ui-react';
import './PlayerCard.scss';

const PlayerCard = ({ playerData }) => {
    
    return (
        
        <div className='card-wrapper'>
            <Card 
            className='player-card'
            header={playerData.name_display_first_last}
            description={`Position: ${playerData.position_txt}`}
            extra={`Bats: ${playerData.bats} Throws: ${playerData.throws}`}
            
            />
        </div>
        
    )
}

export default PlayerCard;

