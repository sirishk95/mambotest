import React, { Component } from "react";


export default class Main extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    Are you ready for takeoff!
                </p>


            {!this.props.auth.isAuthenticated() && 
                <div>
                    <h1>First, Please login</h1>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            }
            </div>

        )
    }
}