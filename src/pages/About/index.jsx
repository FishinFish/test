import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import Status from './Status'
import Settings from './Settings'
import Search from './Search'

const userData = {
  name : 'yyc',
  age:'18',
  uid:'4125891'
}
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <MyNavLink to = {`/about/status/${userData.uid}`}>信息状态</MyNavLink>
          <MyNavLink to = {`/about/settings/?${userData.name}`}>搜索</MyNavLink>
          <MyNavLink to ={ {pathname:`/about/settings/`,state:{name:userData.name,age:userData.age}}}>设置</MyNavLink>
        </div>
        <div>
          <Switch>
            <Route path = '/about/status/:uid' component = {Status}/>
            <Route path = '/about/search' component = {Search}/>
            <Route path = '/about/settings' component = {Settings}/>
            <Redirect to = '/about/status'/>
          </Switch>

        </div>
      </div>
    )
  }
}
