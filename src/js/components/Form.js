import React, { Component } from 'react';

class Form extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = () => {

    }

    render() {
        return (
            <div className='section-wrapper'>
                <h1 className='headline'>Sign up</h1>
                <h3 className='headline'>Be the part of our group.</h3>
                <form className='sign-up-form' method="POST">
                    <div className='form-group'>
                        <label className='form-label no-vision' htmlFor='username'>username</label>
                        <input className='form-control' type="text" name='username' placeholder='Your name' value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label className='form-label no-vision' htmlFor='email'>email</label>
                        <input className='form-control' type="text" name='email' placeholder='Your email' value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label className='form-label no-vision' htmlFor='password'>password</label>
                        <input className='form-control' type="text" name='password' placeholder='' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label className='form-label no-vision' htmlFor='confirmPassword'>confirm password</label>
                        <input className='form-control' type="text" name='confirmPassword' placeholder='' value={this.state.confirmPassword} onChange={this.handleChange} />
                    </div>
                    <div className='form-center'>
                        <input className='form-button' type="submit" value="Sign up" onClick={this.handleClick} />
                        <p className='under-button-text'>already have an account? <a href='#' className='uppercase'>Sign in</a>.</p>
                    </div>
                </form>
                <div className='socials-wrapper'>
                    <a className='social-link instagram' href='#'></a>
                    <a className='social-link facebook' href='#'></a>
                    <a className='social-link pinterest' href='#'></a>
                </div>
            </div>
        );
    }

};

export default Form;