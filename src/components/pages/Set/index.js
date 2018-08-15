
import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import './index.scss'

import AppNav from '../Nav'

class AppSet extends Component {
   
    render () {
        return (
            <div className = "app-set">
                    <p>
                        <NavLink to = "/login" className="button button-big button-round">登录</NavLink>
                    </p>
                <AppNav/>
            </div>
        )
    }

}

export default AppSet