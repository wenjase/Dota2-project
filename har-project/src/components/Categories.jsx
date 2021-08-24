import React, {useState, useEffect} from 'react';

const url = `https://api.opendota.com/api/players/`

function Categories({players, match, setPlayers}) {
    // const player = players.filter(players => players.account_id === parseInt(match.params.account_id))
console.log(match)
// console.log(player.player.account_id)
// console.log(parseInt(match.params.account_id))

useEffect(() => {
    const accountId = match.params.account_id
    const playerUrl = `${url}${accountId}`


    fetch(playerUrl)
    .then((res) => res.json())
    .then((data) => {
        setPlayers(data)
        console.log(players)
        console.log(players.profile.avatar)
    })
    .catch(console.error)
    }
, [])



    // if (player === null) {
    //     return (
    //         <h1>loading</h1>
    //     )
    // } else {
        return (
            <div className='player-container'> 
                   <img src={players.profile.avatar} alt=""/>
                       <div className='info'>
                           <h2>{players.profile.name}</h2>
                           <h3>{players.profile.personaname}</h3>
                           <p>
                             
                               {players.profile.profileurl}
                           </p>
                       </div>
               </div>
        )
        }
    // }
               
            
    
    


export default Categories;