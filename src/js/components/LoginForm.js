import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class FormSection extends Component {

    state = {
        user: {
            name: '',
            password: ''
        }
    }

    _handleTextInputChange = (evt) => {
        const target = evt.target;

        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [target.name]: target.value
            }
        }));

    }

    hasEmpty = (obj) => {
        for (const child in obj) {
            if (obj[child] === '') {
                return true;
            }
        }
        return false;
    }

    _onSubmit = (evt) => {
        evt.preventDefault();
        const user = this.state.user;
        console.log(user);
        if (!this.hasEmpty(user)) {
            console.log('All correct!');
        }
        else {
            console.log('Something is wrong');
        }
    }

    render() {
        return (
            <form className='sign-up-form'>
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
                    value='Sign up'
                    onSubmit={this._onSubmit}
                />
            </form>
        );
    }
}

export default FormSection;