import React, { Component } from 'react';


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
                <input className='form-control' type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this._onChange} />
            </div>
        )
    }
}

export default Input;