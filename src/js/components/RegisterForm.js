import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import {hasNull, hasEmpty} from '../functions/functions';

/*
* Register form with validation
*/

class RegisterForm extends Component {
//display state of user inputs and type of errors in register fields
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        error: {
            name: 'length',
            email: 'length',
            password: 'length',
            confirmPassword: 'length'
        }
    }

    //handle text input 

    _handleTextInputChange = (evt) => {
        const target = evt.target;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [target.name]: target.value
            }
        }), () => {
            this._validationType(target.name);
        });

    }

    //choose proper validation type

    _validationType = (name) => {

        switch (name) {
            case 'name': {
                this._validateUsername(this.state.user.name);
                break;
            }
            case 'email': {
                this._validateEmail(this.state.user.email);
                break;
            }
            case 'password': {
                this._validatePassword(this.state.user.password);
                break;
            }
            case 'confirmPassword': {
                this._confirmPassword();
                break;
            }
            default: {
                break;
            }
        }
    }

    //validate username

    _validateUsername = (name) => {

        let errorType = '';

        if (name.length < 4 || name.length > 20) {
            errorType = 'length';
        }
        else {
            if (this._usernameRegEx(name)) {
                errorType = null;
            }
            else {
                errorType = 'syntax';
            }
        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                name: errorType
            }
        }));
    }

    //validate email 

    _validateEmail = (email) => {

        let errorType = '';

        if (email.length < 1) {
            errorType = 'length';
        }
        else {
            if (this._emailRegEx(email)) {
                errorType = null;
            }
            else {
                errorType = 'syntax';
            }
        }


        this.setState(prevState => ({
            error: {
                ...prevState.error,
                email: errorType
            }
        }));
    }

    //validate password

    _validatePassword = (password) => {
        let errorType = '';

        if (password.length < 6) {
            errorType = 'length';
        }
        else {
            if (this._passwordRegEx(password)) {
                errorType = null;
            }
            else {
                errorType = 'syntax';
            }
        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                password: errorType
            }
        }), () => this._confirmPassword());
    }

    //confirm password

    _confirmPassword = () => {
        let errorType = '';
        const password = this.state.user.password;
        const confirmPassword = this.state.user.confirmPassword;

        if (confirmPassword < 1) {
            errorType = 'length';
        }
        else {
            if (confirmPassword === password) {
                errorType = null;
            }
            else {
                errorType = 'match';
            }
        }
        this.setState(prevState => ({
            error: {
                ...prevState.error,
                confirmPassword: errorType
            }
        }));

    }

    //RegEX for password, email, username

    _emailRegEx = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    _usernameRegEx = (name) => {
        const reg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm
        return reg.test(name);
    }

    _passwordRegEx = (password) => {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
        return reg.test(password);
    }

    //handle button click

    _onSubmit = (evt) => {
        evt.preventDefault();
        const user = this.state.user;
        const error = this.state.error;
        //display user obj and error in console
        console.log(user);
        console.log(error);
        //check if all infos is ok and there is no empty inputs
        if (!hasEmpty(user) && hasNull(error)) {
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
                    window='register'
                    name='name'
                    label='username'
                    type='text'
                    placeholder='Your name'
                    info='at least 4 chars, cant start and end with dot'
                    value={this.state.user.name}
                    onHandleTextInputChange={this._handleTextInputChange}
                    errorType={this.state.error.name}
                />
                <Input
                    window='register'
                    name='email'
                    label='email'
                    type='email'
                    placeholder='Your email'
                    value={this.state.user.email}
                    onHandleTextInputChange={this._handleTextInputChange}
                    errorType={this.state.error.email}
                />
                <Input
                    window='register'
                    name='password'
                    label='password'
                    type='password'
                    placeholder='Your password'
                    info='At least 6 chars with 1 uppercase, 1 lowercase, 1 digit'
                    value={this.state.user.password}
                    onHandleTextInputChange={this._handleTextInputChange}
                    errorType={this.state.error.password}
                />
                <Input
                    window='register'
                    name='confirmPassword'
                    label='confirm password'
                    type='password'
                    placeholder='Confirm your password'
                    value={this.state.user.confirmPassword}
                    onHandleTextInputChange={this._handleTextInputChange}
                    info='Passwords dont match'
                    errorType={this.state.error.confirmPassword}
                />
                <Button
                    linkTo='login'
                    value='Sign up'
                    onSubmit={this._onSubmit}
                />
            </form>
        )
    }
}

export default RegisterForm;