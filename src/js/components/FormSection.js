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
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
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
        });

    }

    _validationType = (name) => {

        switch (name) {
            case 'email': {
                console.log(this.state.user.email);
                this._validateEmail(this.state.user.email);
                break;
            }
            case 'password': {
                console.log(this.state.user.password);
                break;
            }
            case 'confirmPassword': {
                console.log(this.state.user.confirmPassword);
                break;
            }
            default: {
                console.log(this.state.user.name);
                break;
            }
        }
    }

    _onSubmit = (evt) => {
        evt.preventDefault();
    }

    _validateEmail = (email) => {

        let errorType = '';

        if (this._emailRegExp(email)) {
            errorType = '';
        }
        else {
            errorType = 'Invalid email';
        }

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                email: errorType
            }
        }), () => console.log(this.state.error.email)
        );
    }

    _emailRegExp = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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