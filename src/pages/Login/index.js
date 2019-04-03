import React, { Component } from 'react';
import '../../styles/login/login.scss';
import loginLogo from '../../assets/images/logo.png';
import WrappedNormalLoginForm from '../../components/form/index';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        username: {
          value: '',
        },
        password: {
          value: '',
        },
      },
    };
  }
  render() {
    return (
      <div className="login-wrap">
        <div className="login-content">
          <div className="login-left-bg-box"></div>
          <div className="login-right-login-box">
            <img src={loginLogo} className="logo" alt="仪表盘logo" />
            <div className="title">经营仪表盘数据管理平台</div>
            <WrappedNormalLoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
