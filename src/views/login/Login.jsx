import React, { Component } from 'react'
import {Input, Form, Button} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.scss'

export default class Login extends Component {

  login = () => {
    console.log('登录')
    this.props.history.push('/home/index')
  }
  render() {
    return (
      <div className="login">
        <div className="login-wrap">
          <div className="top_line">
          <div className="bottom_line">
          <div className="left_line">
          <div className="right_line">
        <h1>欢迎登录</h1>
        <Form>
          <Form.Item name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input prefix={<UserOutlined />}/>
          </Form.Item>
          <Form.Item name="password"
          rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password prefix={<LockOutlined />}/>
          </Form.Item>
        </Form>
        <Button shape="round" onClick={this.login}>登录</Button>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
