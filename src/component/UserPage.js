import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class UserPage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <Link to={"/"} className="home">
                        Home
                    </Link>
                </nav>
                
                <h1>Hello From UserPage......</h1>

            </div>
        )
    }
}

export default  UserPage;
