import React, { Component } from 'react'
import { Skeleton } from 'antd';

export default class Article extends Component {
  render() {
    return (
      <div className="article">
        文章
        <Skeleton.Avatar/>
        <Skeleton />
        文章
        <Skeleton.Avatar />
        <Skeleton />
      </div>
    )
  }
}