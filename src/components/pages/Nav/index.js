
import React, { Component } from 'react'

import {  NavLink } from 'react-router-dom'

import './index.scss'




const NavItem = ({data})=>{
    return (
        <NavLink className="tab-item external" activeClassName="active" to = { data.path } exact = {data.exact}>
            <span className={"icon icon-" + data.icon } ></span>
            <span className="tab-label"> { data.title } </span>
        </NavLink> 
    )
}

class AppNav extends Component {

    constructor(props){
        super(props)
        this.state={
            navs:[
                {id:1,path:'/',title:'首页',icon:'home',exact:true},
                {id:2,path:'/collect',title:'收藏',icon:'star'},
                {id:3,path:'/set',title:'我的',icon:'me'},
            ]
        }
    }
   
    render () {
        let { navs } = this.state
        return (
            <div className = "app-nav">
                <nav className="bar bar-tab">
                    { navs.map(item =>(
                        <NavItem data= { item } key = { item.id }/>
                    )) }
                </nav>
            </div>
        )
    }

}

export default AppNav