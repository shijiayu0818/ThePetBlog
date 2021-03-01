import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navComponent.scss'

export default class NavComponent extends Component {

  // constructor(props) {
  //   super(props)
  // }
  // goToLogin() {
  //   console.log( this.props)
  //   this.props.history.push('/login');
  //  }
  render() {


    return (
      <div className="nav-component">
        <div className="logo-wrap">LOGO</div>
        <ul className="nav-list">
          <li>
            <NavLink to="/home/index">首页</NavLink>
          </li>
          <li>
            <NavLink to="/home/petArticle">宠文</NavLink>
          </li>
          <li>
            <NavLink to="/home/learn">学习</NavLink>
          </li>
          <li>
            <a href="mailto:shijiayu0818@163.com`">联系我</a>
          </li>
        </ul>
        <ul className="personal-nav">
        <li>
            <NavLink to="/home/personalData">个人</NavLink>
          </li>
          <li>
            <NavLink to="/login">登录/退出</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
