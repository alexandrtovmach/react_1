import React, { Component } from 'react';
import { UserComponent } from './app.components/user/user.component';
import './app.component.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Combat</h1>
                <UserComponent/>
            </div>
        )
    }
}

export default App