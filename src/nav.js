import React, { Component } from 'react';
import { link, Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <ul className='nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        )
    }
}

export default Profile;