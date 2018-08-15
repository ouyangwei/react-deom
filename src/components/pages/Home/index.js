
import React, { Component } from 'react'

import './index.scss'

import AppHomeBanner from './HomeBanner'


import AppNav from '../Nav'

class AppHome extends Component {

    componentWillUnmount(){
        this.unmount = true
    }
   
    render () {
        return (
            <div className = "app-home">
                <AppHomeBanner unmount={this.unmount}/>
                <AppNav/>
            </div>
        )
    }

}

export default AppHome