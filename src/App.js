import React, { Component } from 'react';

import { Route, Redirect, Switch, withRouter} from 'react-router-dom'

import AppHome from './components/pages/Home'

import AppCollect from './components/pages/Collect'

import AppSet from './components/pages/Set'

import AppLogin from './components/pages/Login'

import AppNotFound from './components/pages/NotFound'

class App extends Component {
  componentWillMount(){
    
  }
  componentWillReceiveProps(props){
    console.log('路由切换了,pathname:' + props.location.pathname)
}
  render() {
    let { routes } = this.props
  
    return (
      <div className="App">
          <Switch>
            { routes.map(({id,path,component,exact}) => (
              <Route key = { id } path = { path } component = { component } exact = { exact } ></Route>
            )) }
            <Redirect from = "*"  to = "/not-found"/>
          </Switch>
      </div>
    )
  }
}
App.defaultProps ={
  routes:[
    {id:1,path:'/',component:AppHome,exact:true},
    {id:2,path:'/collect',component:AppCollect},
    {id:3,path:'/set',component:AppSet},
    {id:4,path:'/login',component:AppLogin},
    {id:5,path: '/not-found', component: AppNotFound }
  ]
}

export default withRouter(App);
