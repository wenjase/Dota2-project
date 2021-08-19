import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div className='Home'>
            <Link to='/'>
            <h2>Home</h2>
            </Link>
        </div>
    );
}

export default Nav;