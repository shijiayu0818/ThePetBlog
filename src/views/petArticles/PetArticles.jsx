import React, { Component } from 'react'
import { Button, Skeleton } from 'antd';
import './petArticles.scss'

export default class PetArticles extends Component {

  goToDetail = () => {
    this.props.history.push('/home/petArticle/articleDetail')
  }

  goToWrite = () => {
    this.props.history.push('/home/petArticle/writeArticle')
  }

  render() {
    return (
      <div className="pet-articles">
        <div>
          <Button onClick={this.goToWrite}>编写文章</Button>
          </div>
        <ul className="article-ul"><li>
          <h2 onClick={this.goToDetail}>文章的标题是啥样的</h2>
          <div className="pet-article-detail">
            <span>
            <Skeleton.Image />
            </span>
            <span className="article-desc">
              文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1
              文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1
            </span>
          </div>
          </li>
          <li>
          <h2>文章的标题是啥样的</h2>
          <div className="pet-article-detail">
            <span>
            <Skeleton.Image />
            </span>
            <span className="article-desc">
              文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1
              文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1文章的内容1
            </span>
          </div>
          </li>
          </ul>
      </div>
    )
  }
}
