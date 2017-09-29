import React, { Component } from 'react';

export class ListUserComponent extends Component {

    constructor(props){
        super(props);
    }

    remove(index, event) {
        this.props.removeUser(index);
    }

    render() {
        const userList = this.props.users.map((elem, index) => {
            return (
                <div className="user" key={index}>
                    {index}.{elem}
                    <div className="remove-user" onClick={this.remove.bind(this, index)}>X</div>
                </div>
            )
        })

        return (
            <div className="user-list">
                {userList}
                <span className={(this.props.users.length)? 'hidden': ''}>No users</span>
            </div>
        )
    }

}