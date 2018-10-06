import React, { Component } from 'react';

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
                <p className='under-button-text'>already have an account? <a href='/login' className='uppercase'>Sign in</a>.</p>
            </div>
        )
    }

}

export default Button;