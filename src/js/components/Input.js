import React, { Component } from 'react';
import errorIcon from '../../assets/images/error.svg';
import okIcon from '../../assets/images/ok.svg';

/*
* Input component for form
*/

class Input extends Component {

    _onChange = (evt) => {
        if (this.props.onHandleTextInputChange) {
            this.props.onHandleTextInputChange(evt);
        }
    }

    render() {
        return (
            <div className='form-group'>
                <label className='form-label' htmlFor={this.props.name}>{this.props.label}</label>
                <input className='form-control' type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this._onChange} required />
                {
                    //When there is window props display validation icon
                    this.props.window ?
                        <img className={`form-icon ${this.props.value ? 'visible' : 'no-visible'}`} src={this.props.errorType === null ? okIcon : errorIcon} alt='form validation icon'></img>
                        :
                        ''
                }
                {
                    //When there is error display information under input
                    this.props.info ?
                        <div className={`info-window ${this.props.value && this.props.errorType ? 'visible' : 'no-visible'}`}><p>{this.props.info}</p></div>
                        :
                        ''
                }
            </div>
        )
    }
}

export default Input;