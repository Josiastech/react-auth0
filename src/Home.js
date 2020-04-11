import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        const { isAuthenticated, login } = this.props.auth;
        return (
            <div>
                <h1>Home</h1>
                { this.props.auth.isAuthenticated() ? (
                    <Link to="/profile">View Profile</Link>
                ) : (
                <button onClick={this.props.auth.login}>Log in</button>
                )}
            </div>
        )
    }
}

export default Home;