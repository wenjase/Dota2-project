import React, {useState, useEffect} from 'react';

function Categories({players}) {
    const [loading, setLoading] = useState(true)
    if (loading) {
        return (
            <h1>loading</h1>
        )
    } else {
        return (
            <div className='player-container'> 
               <img src={players[0].avatar} alt={players[0].avatar}/>
                   <div className='info'>
                       <h2>{players[0].name}</h2>
                       <h3>{players[0].personaname}</h3>
                       <p>
                           {players[0].team_name}
                           {players[0].team_tag}
                           {players[0].profileurl}
                       </p>
                       <h2>working?</h2>
                   </div>
            </div>
        );
    }
}

export default Categories;