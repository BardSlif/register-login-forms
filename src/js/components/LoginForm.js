import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import { hasEmpty } from '../functions/functions';

/*
* Login form
*/

class LoginForm extends Component {

    //State for login form
    state = {
        user: {
            name: '',
            password: ''
        }
    }

    //handle text input on change

    _handleTextInputChange = (evt) => {
        const target = evt.target;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [target.name]: target.value
            }
        }));

    }

    //handle submit 

    _onSubmit = (evt) => {
        evt.preventDefault();
        const user = this.state.user;
        //display in console log information about inputs
        console.log(user);
        //if there is empty field also display in console.log
        if (!hasEmpty(user)) {
            console.log('All correct!');
        }
        else {
            console.log('Something is wrong');
        }
    }

    render() {
        return (
            <form className='sign-form'>
                <Input
                    name='name'
                    label='username or email'
                    type='text'
                    placeholder='Your username or email'
                    value={this.state.user.name}
                    onHandleTextInputChange={this._handleTextInputChange}
                />
                <Input
                    name='password'
                    label='password'
                    type='password'
                    placeholder='Your password'
                    value={this.state.user.password}
                    onHandleTextInputChange={this._handleTextInputChange}
                />
                <Button
                    linkTo='register'
                    value='Sign in'
                    onSubmit={this._onSubmit}
                />
            </form>
        );
    }
}

export default LoginForm;