import React, { Component } from 'react';
import {IndexLink} from 'react-router';
import logo from '../../asset/logo.svg';

import '../../style/login.scss';
export default class LoginBase extends Component {
    render () {
        return (
            <div className="login-page">
                <div className="login-logo">
                    <IndexLink to="/"><img src={logo} alt=""/></IndexLink>
                </div>
                {this.props.children}
            </div>
        )
    }
}

