import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

/*
* Form wrapper with proper titles, subtitles and forms
*/

class FormSection extends Component {

    render() {
        return (
            <div className='section-wrapper'>
                <h1 className='headline main-title'>{this.props.title}</h1>
                <h3 className='headline'>{this.props.secTitle}</h3>
                <Route exact path='/' render={() => (
                    <RegisterForm/>
                )} />
                <Route path='/login' render={() => (
                    <LoginForm/>
                )} />
                <Footer />
            </div>
        );
    }

}

export default FormSection;