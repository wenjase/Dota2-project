import React, {useState, useEffect} from 'react';
import Categories from './Categories';
import {Link, Route} from 'react-router-dom';




function Filter({players, setPlayers}) {
const [loading, setLoading] = useState(true)



useEffect(() => {
    const getData = () => {
        const url = `https://api.opendota.com/api/proPlayers/`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setPlayers(data)
        setLoading(false)
    })
    .catch(console.error)
    }
    getData()
}, [])



if (loading) {
    return (
        <h1>loading</h1>
    )
} else {
    return (
        <section className='container'> 
            {players.slice(0, 50).map((player) => {
                console.log(player)
                return (
                 <div className='dota-container'> 
                        <img src={player.avatar} alt={player.avatar}/>
                        <Link to={`/Categories/${player.account_id}`} key={player.account_id}>
                        <p>{player.name}</p>
                     </Link>
                 </div> 
                )
            })
        }
        </section>
    );
} 
}

export default Filter;