import React, { Component } from 'react'
import { Carousel } from 'antd'
import dog1 from '../../../assets/images/dog1.jpg'
import dog2 from '../../../assets/images/dog2.jpg'
import dog3 from '../../../assets/images/dog3.jpg'
import dog from '../../../assets/images/dog.jpg'

export default class Banner extends Component {
  render() {
    return (
      <Carousel effect="fade" autoplay>
      <div className="banner-wrap">
        {/* <h3 style={contentStyle}>1</h3> */}
        <img src={dog1} alt=""/>
      </div>
      <div className="banner-wrap">
      <img src={dog2} alt=""/>
      </div>
      <div className="banner-wrap">
      <img src={dog3} alt=""/>
      </div>
      <div className="banner-wrap">
      <img src={dog} alt=""/>
      </div>
    </Carousel>
    )
  }
}
