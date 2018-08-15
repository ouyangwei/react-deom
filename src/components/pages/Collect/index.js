
import React, { Component } from 'react'

import { Route, NavLink} from 'react-router-dom'

import './index.scss'

import AppNav from '../Nav'

import AppCollectPhone from './Phone'

import AppCollectSim from './SIM'

class AppCollect extends Component {

   
    componentWillMount(){
       
        this.props.history.push(`${this.props.match.path}/phone` )
    }
    
    render () {
        let { match } = this.props
        return (
            <div className = "app-collect">
                <header className="bar bar-nav">
                    <h1 className='title'>联系人</h1>
                </header>
                <div className="content">
                    <div className="buttons-tab">
                        <NavLink to={`${match.path}/phone`} className="tab-link button" activeClassName="active">手机</NavLink>
                        <NavLink to={`${match.path}/sim`} className="tab-link button" activeClassName="active" >sim卡</NavLink>
                    </div>
                    <div className="content-block">
                        <Route path={`${match.path}/phone`} component = {AppCollectPhone} ></Route>
                        <Route path={`${match.path}/sim`} component = {AppCollectSim} ></Route>
                    </div>
                </div>
                <AppNav/>
            </div>
        )
    }

}

export default AppCollect