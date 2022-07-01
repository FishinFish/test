import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Home from './pages/Home'
import About from './pages/About'
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React 路由练习</h2>
        <div>
            <MyNavLink to = "/home">Home</MyNavLink>
            <MyNavLink to = "/about">About</MyNavLink>
        </div>
        <div>
            <Switch>
              <Route path = "/home" component={Home}/>
              <Route path = "/about" component={About}/>
              <Redirect to = "/home"/>
            </Switch>
        </div>
      </div>
    )
  }
}
