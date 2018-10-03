import React, { Component } from 'react';
import Input from './Input';
import Footer from './Footer';

class FormSection extends Component {

    state = {
        user: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        error: {
            name: null,
            email: null,
            password: null,
            confirmPassword: null
        }
    }

    _handleTextInputChange = (evt) => {
        const target = evt.target;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [target.name]: target.value
            }
        }), () => {
            this._validationType(target.name);
            console.log(this.state.error);
            console.log(this.state.user);
        });

    }


    _validationType = (name) => {

        switch (name) {
            case 'name': {
                //console.log(this.state.user.name);
                this._validateUsername(this.state.user.name);
                break;
            }
            case 'email': {
                //console.log(this.state.user.email);
                this._validateEmail(this.state.user.email);
                break;
            }
            case 'password': {
                //console.log(this.state.user.password);
                this._validatePassword(this.state.user.password);
                break;
            }
            case 'confirmPassword': {
                //console.log(this.state.user.confirmPassword);
                this._confirmPassword();
                break;
            }
            default: {
                break;
            }
        }
    }

    _validateUsername = (name) => {

        let errorType = '';

        if (name.length < 4 || name.length > 20) {
            errorType = 'Username should have at least 4 characters and no more than 20';
        }
        else {
            if (this._usernameRegEx(name)) {
                errorType = null;
            }
            else {
                errorType = 'Can contain only a-z, 0-9, underscore and periods. Cannot end and start with period.';
            }
        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                name: errorType
            }
        }), () => console.log('name: ', this.state.error.name)
        );
    }

    _validateEmail = (email) => {

        let errorType = '';

        if (this._emailRegEx(email)) {
            errorType = null;
        }
        else {
            errorType = 'Invalid email';
        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                email: errorType
            }
        }), () => console.log('email: ', this.state.error.email)
        );
    }

    _validatePassword = (password) => {
        let errorType = '';

        if (password.length < 8) {
            errorType = 'Password should have at least 8 characters';
        }
        else {
            if (this._passwordRegEx(password)) {
                errorType = null;
            }
            else {
                errorType = 'Must contain at least 1 uppercase letter, 1 lowercase letter and 1 number. Can contain special characters.';
            }
        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                password: errorType
            }
        }), () => console.log('password: ', this.state.error.password)
        );
    }

    _confirmPassword = () => {
        let errorType = '';
        const password = this.state.user.password;
        const confirmPassword = this.state.user.confirmPassword;

        if (confirmPassword === password) {
            errorType = null;
        }
        else {
            errorType = 'Passwords dont matches';
        }
        this.setState(prevState => ({
            error: {
                ...prevState.error,
                confirmPassword: errorType
            }
        }), () => console.log('confirmPassword: ', this.state.error.confirmPassword)
        );

    }

    hasNull = (obj) => {
        for (const child in obj) {
            if (obj[child] === null) {
                return false;
            }
        }
        return true;
    }

    hasEmpty = (obj) => {
        for (const child in obj) {
            if (obj[child] === '') {
                return true;
            }
        }
        return false;
    }

    _emailRegEx = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    _usernameRegEx = (name) => {
        const reg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm
        return reg.test(name);
    }

    _passwordRegEx = (password) => {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        return reg.test(password);
    }

    _onSubmit = (evt) => {
        evt.preventDefault();
        const user = this.state.user;
        const error = this.state.error;
        if (this.hasEmpty(user)) {
            console.log('One of the fields is empty!');
        }
        else {
            console.log('All fields filled');
        }
        if(this.hasNull(error)) {
            console.log('One of the field is not correct!');
        }
        else {
            console.log('All correct!');
        }

    }

    render() {
        return (
            <div className='section-wrapper'>
                <h1 className='headline'>Sign up</h1>
                <h3 className='headline'>Be the part of our group.</h3>
                <form className='sign-up-form'>
                    <Input
                        name='name'
                        label='username'
                        type='text'
                        placeholder='Your name'
                        value={this.state.user.name}
                        onHandleTextInputChange={this._handleTextInputChange}
                    />
                    <Input
                        name='email'
                        label='email'
                        type='email'
                        placeholder='Your email'
                        value={this.state.user.email}
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
                    <Input
                        name='confirmPassword'
                        label='confirm password'
                        type='password'
                        placeholder='Confirm your password'
                        value={this.state.user.confirmPassword}
                        onHandleTextInputChange={this._handleTextInputChange}
                    />
                    <div className='form-center'>
                        <input className='form-button' type="submit" value="Sign up" onClick={this._onSubmit} />
                        <p className='under-button-text'>already have an account? <a href='/login' className='uppercase'>Sign in</a>.</p>
                    </div>
                </form>
                <Footer />
            </div>
        );
    }

};

export default FormSection;