import React, {useState, useEffect} from 'react';

const url = `https://api.opendota.com/api/players/`

function Categories({match}) {
    // const player = players.filter(players => players.account_id === parseInt(match.params.account_id))
console.log(match)
// console.log(players.players.account_id)
// console.log(parseInt(match.params.account_id))
const [players, setPlayers] = useState(localStorage.getItem('players'))



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

useEffect(() => {
    localStorage.setItem('players', players)
}, [players])

    // if (players === null) {
    //     return (
    //         <h1>loading</h1>
    //     )
    // } else {
        return (
            <div className='player-container'> 
                   {/* <img src={players.profile.avatar} alt=""/>
                       <div className='info'>
                           <h2>{players.profile.name}</h2>
                           <h3>{players.profile.personaname}</h3>
                           <p>
                               {players.profile.profileurl}
                           </p>
                       </div> */}
               </div>
        )
        }
    //  }
               
            
    
    


export default Categories;