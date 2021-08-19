import React, {useState, useEffect} from 'react';
import Categories from './Categories';
import {Link} from 'react-router-dom'

function Filter(props) {

const [players, setPlayers] = useState([])

useEffect(() => {    
const url = `https://api.opendota.com/api/proPlayers`
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data[0].name)
    setPlayers(data)
    console.log(players)
})
.catch(console.error);}, []);






    return (
        <section className='container'> 
            {players.slice(0, 25).map((player) => {
                return (
                    <Link to={`/details/${player.account_id}`} key={player.account_id}>
                 <div className='name'>
                     <img 
                src={player.avatar} alt={player.avatar}
                />
                     {player.name}
                 </div>
                    </Link>
                
                )
            })
        }
        </section>
    );
}

export default Filter;