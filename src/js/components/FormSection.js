import React, { Component } from 'react';
import Footer from './Footer';
import RegisterForm from './RegisterForm';

class FormSection extends Component {

    render() {
        return (
            <div className='section-wrapper'>
                <h1 className='headline main-title'>Sign up</h1>
                <h3 className='headline'>Be the part of our group.</h3>
                <RegisterForm/>
                <Footer />
            </div>
        );
    }

};

export default FormSection;