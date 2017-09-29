import React, { Component } from 'react';

export class AddUserComponent extends Component {


    constructor(props){
        super(props);
        this.state = {
            userName: '',
            showForm: false
        }
    }

    save(bindObj, event) {
        event.preventDefault();
        this.props.addUser(this.refs.nameInput.value);
        this.refs.nameInput.value = '';
        this.setState({
            showForm: false
        })
    }

    showForm() {
        this.setState({
            showForm: true
        })
    }
    
    render() {
        return (
            <div>
                <button className={this.state.showForm? 'hidden': ''} onClick={this.showForm.bind(this)}>Add</button>

                <form className={!this.state.showForm? 'hidden': ''} onSubmit={this.save.bind(this, event)}>
                    <input name="name" defaultValue={this.state.userName} ref="nameInput" required/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }

}