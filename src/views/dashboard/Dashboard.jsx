import React, { Component } from 'react'
import Article from './components/Article'
import Banner from './components/Banner'
import './dashboard.scss'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-component">
        <div className="dashboard-component-container">
          <Banner></Banner>
          <Article></Article>
        </div>
      </div>
    )
  }
}
