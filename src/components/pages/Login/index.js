
import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import './index.scss'

class AppLogin extends Component {
    constructor (props) {
        super(props)
    }
    getSkip(){
       let { history } = this.props
       history.go(-1)
    }
    render () {
        return (
            <div className = "app-login">
                <header className="bar bar-nav">
                    <h1 className="title">
                        <span onClick={this.getSkip.bind(this)} className="icon icon-left"></span>
                        请登录
                        <span className="icon icon-right"></span>
                    </h1>
                    
                </header>
            </div>
        )
    }

}

export default AppLogin