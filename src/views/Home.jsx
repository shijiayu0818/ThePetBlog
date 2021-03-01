import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavComponent from '../components/navComponent/NavComponent'
import ArticleDetail from './articleDetail/ArticleDetail'
import Dashboard from './dashboard/Dashboard'
import Learn from './learn/Learn'
import PersonalData from './personalData/PersonalData'
import PetArticles from './petArticles/PetArticles'
import WriteArticle from './writeArticle/WriteArticle'


const routes = [
  {
    path: "/home/index",
    component: Dashboard
},
  {
    path: "/home/petArticle",
    component: PetArticles
},
{
  path: "/home/learn",
  component: Learn
},
{
  path: "/home/personalData",
  component: PersonalData
},
{
  path: "/home/petArticle/articleDetail",
  component: ArticleDetail
},
{
  path: "/home/petArticle/writeArticle",
  component: WriteArticle
}
]
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <NavComponent></NavComponent>
        <div className="home-content">
        {routes.map((route, index) => (
          <Route
              exact
              key={index}
              path={route.path}
              component={route.component}
          />
      ))}
        </div>
      </div>
    )
  }
}
