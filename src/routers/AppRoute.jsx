/*
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-02-23 14:28:51
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-02-26 15:19:56
 */
import React,{Component} from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../views/Home'
import App from '../views/App'
import Login from '../views/login/Login'
import mp from '../assets/meda/qingkong.mp3'

export default class AppRoute extends Component {

  componentDidMount(){
    // document.getElementById('auto').play()

  }
  render() {
    return (
     <Router>
       <audio src={mp} autoPlay={true} id="auto" loop={true}
       ></audio>
       <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}>
        </Route>
        <Route path="/" component={App}>
          <Redirect to="/home"></Redirect>
        </Route>
       </Switch>
     </Router>
    )
  }
}
