import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <div className='Home'>
            <Link to='/'>
            <button type='button'>Home</button>
            </Link>
        </div>
    );
}

export default Nav;