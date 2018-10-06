import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {

    onSubmitButton = (evt) => {
        if (this.props.onSubmit) {
            this.props.onSubmit(evt);
        }
    }

    render() {
        return (
            <div className='form-center'>
                <input className='form-button' type="submit" value={this.props.value} onClick={this.onSubmitButton} />
                {
                    //Link to proper window - login or register
                    this.props.linkTo === 'register' ?
                        <p className='under-button-text'>don't have an account?
                            <Link to='/' className='uppercase'> Sign up</Link>.
                        </p>
                        :
                        <p className='under-button-text'>already have an account?
                            <Link to='/login' className='uppercase'> Sign in</Link>.
                        </p>
                }
            </div>
        )
    }

}

export default Button;