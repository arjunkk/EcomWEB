import React from 'react';
//a tag can't be used
// use Link instead
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul className='Nav-ul'>
                <li><Link to='/'>Products</Link> </li>
                <li><Link to='/add'>Add Product</Link> </li>
                <li><Link to='/update'>Update Product</Link> </li>
                <li><Link to='/profile'>Profile</Link> </li>
                <li><Link to='/logout'>log out</Link> </li>
                <li><Link to='/signup'>signup</Link> </li>
            </ul>
        </div>
    )
}

export default Nav;