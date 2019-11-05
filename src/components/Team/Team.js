import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Team.scss';

import PlayerCard from '../PlayerCard/PlayerCard.js';

const Team = props => {

    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        axios.get(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='133'`)
        .then(res => {
            console.log(res.data.roster_40.queryResults.row)
            setPlayerList(res.data.roster_40.queryResults.row)
        })
        .catch(err => console.log(err))
    }, [])

    
    return (
        <div className='team-wrapper'>
            {playerList.map(item => {
                return <PlayerCard key={item.player_id} playerData={item} />
            })}
        </div>
    )
}

export default Team;