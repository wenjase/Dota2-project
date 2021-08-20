import React, {useState, useEffect} from 'react';

function Categories(props) {

    const [player, setPlayer] = useState([])

    // useEffect(() => {    
    // const url = `https://api.opendota.com/api/proPlayers`
    // fetch(url)
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data[0].name)
    //     setPlayer(data)
    //     console.log(player)
    // })
    // .catch(console.error);}, []);




    return (
        <div className='player-container'> 
            <img src={player.avatar} alt={player.avatar}/>
                <div className='info'>
                    <h2>{player.name}</h2>
                    <h3>{player.personaname}</h3>
                    <p>
                        {player.team_name}
                        {player.team_tag}
                        {player.profileurl}
                    </p>
                </div>
        </div>
    );
}

export default Categories;