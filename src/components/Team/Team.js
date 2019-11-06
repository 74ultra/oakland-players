import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Team.scss';
import Controls from '../Controls/Controls.js';
import PlayerCard from '../PlayerCard/PlayerCard.js';

const Team = props => {

    const [playerList, setPlayerList] = useState([]);
    const [displayList, setDisplayList] = useState([]);

    const getPlayers = () => {
        axios.get(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='133'`)
        .then(res => {
            // console.log(res.data.roster_40.queryResults.row)
            setPlayerList(res.data.roster_40.queryResults.row)
        })
        .catch(err => console.log(err))
    }
    
    
    useEffect(() => {
       return (displayList.length === 0 ? getPlayers() : undefined);
    }, [displayList])

    const showPitchers = () => {
        getPlayers();
        setDisplayList(playerList.filter(item => item.position_txt === 'P'));
    }

    const showInfielders = () => {
        getPlayers()
        setDisplayList(playerList.filter(item => (
            ((item.position_txt === 'SS') || (item.position_txt === '2B') || (item.position_txt === '3B') || (item.position_txt === '1B'))
        )))
    }

    const showOutfielders = () => {
        getPlayers()
        setDisplayList(playerList.filter(item => (
            ((item.position_txt === 'CF') || (item.position_txt === 'LF') || (item.position_txt === 'RF'))
        )))
    }

    const showCatchers = () => {
        getPlayers();
        setDisplayList(playerList.filter(item => item.position_txt === 'C'));
    }

    const getAllPlayers = () => {
        getPlayers();
        setDisplayList(playerList)
    }
    


    
    return (
        <div>
            <div>
                <Controls showPitchers={showPitchers} 
                          showInfielders={showInfielders} 
                          showOutfielders={showOutfielders} 
                          showCatchers={showCatchers} 
                          getAllPlayers={getAllPlayers}    
                          />
            </div>
            <div className='team-wrapper'>
                {displayList.map(item => {
                return <PlayerCard key={item.player_id} playerData={item} />
            })}
            </div>
            
            
        </div>
    )
}

export default Team;