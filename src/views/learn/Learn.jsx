import { Button } from 'antd'
import React, { Component } from 'react'
import './learn.scss'
import headImage from '../../assets/images/dog.jpg'

export default class Learn extends Component {
  render() {
    return (
      <div className="learn-component">
        <div className="search-buttons">
        <Button  shape="round">最新</Button>
        <Button  shape="round">推荐</Button>
        <Button  shape="round">关注</Button>
        <Button  shape="round" className="more-button">更多</Button>
        </div>
        <ul className="learn-article-list">
          <li>
            <div className="sharer-message">
            <img className="head-image" src={headImage} alt=""/>
            <span>屎屎屎啊</span>
            <span className="share-time">2021/3/1</span>
            </div>
            <h2>我是分享的文章名字</h2>
            <div>我是文章的简介，我是文章的简介。我就是简介呀，所以我有点短呀
              我真是文章简介呀，
            </div>
            <div className="operation-div">
            <span>👍{23}</span>
            <span></span>
            </div>
          </li>
          <li>
            <div className="sharer-message">
            <img className="head-image" src={headImage} alt=""/>
            <span>屎屎屎啊</span>
            <span className="share-time">2021/3/1</span>
            </div>
            <h2>我是分享的文章名字</h2>
            <div>我是文章的简介，我是文章的简介。我就是简介呀，所以我有点短呀
              我真是文章简介呀，
            </div>
            <div className="operation-div">
            <span>👍{23}</span>
            <span></span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
