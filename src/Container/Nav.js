import React from 'react';
import {NavLink} from 'react-router-dom';

const styles = {
    color: 'black',
    fontWeight: 'bold'
}

const Nav = () => {
    return (
        <div>
            <nav>
                <NavLink exact activeStyle={styles} to="/">Home</NavLink>
                <NavLink activeStyle={styles} to="/about">About</NavLink>
                <NavLink activeStyle={styles} to="/contact">Contact</NavLink>
                <NavLink activeStyle={styles} to="/posts">Posts</NavLink>
            </nav>
        </div>

    )
}

export default Nav
