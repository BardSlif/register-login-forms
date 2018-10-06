import React, { Component } from 'react';
import FormSection from './FormSection';
import { Route } from 'react-router-dom';

class SiteWrapper extends Component {
    render() {
        return (
            <div className={`site-wrapper ${this.props.background}`}>
                <section className='half left'></section>
                <section className='half form-section'>
                    <Route exact path='/' render={() => (
                        <FormSection
                            title='Sign up'
                            secTitle='Be the part of our group.'
                        />
                    )} />
                    <Route path='/login' render={() => (
                        <FormSection
                            title='Sign in'
                            secTitle='Welcome back!'
                        />
                    )} />
                </section>
            </div>
        )
    }
}

export default SiteWrapper;