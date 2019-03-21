import React, { Component } from 'react';
import '../../styles/login/login.scss';
import loginLogo from '../../assets/images/logo.png';
import { Form, Icon, Input, Button } from 'antd';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      iconType: 'error'
    }
  }
  handleChange() {
    console.log(1);
  }
  render() {
    const { iconType } = this.state;
    return (
      <div className="login-wrap">
        <div className="login-content">
          <div className="login-left-bg-box"></div>
          <div className="login-right-login-box">
            <img src={loginLogo} className="logo" alt="仪表盘logo" />
            <div className="title">经营仪表盘数据管理平台</div>
            <Form onSubmit={this.handleSubmit} className="login-form login-ruleForm">
              <Form.Item
                 hasFeedback
                 validateStatus={iconType}
              >
                  <Input
                    name="username"
                    prefix={<Icon type="user"
                    style={{ color: 'rgba(0,0,0,.25)' }} />}
                    onChange={this.handleChange.bind(this)}
                    placeholder="请输入账号" />
              </Form.Item>
              <Form.Item
                 hasFeedback
                 validateStatus={iconType}
              >
                <Input name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
