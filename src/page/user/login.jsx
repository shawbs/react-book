import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router-dom';

import '../../style/login.scss';

import store from '../../store/store';
import {LOGIN_ACTION} from '../../api/index';

import {LoginLogo} from '../../component/common';

import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
const FormItem = Form.Item;



class LoginForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('表单提交的数据: ', values);
        this.props.handleSubmit(values);
        
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;

    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名！' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入用户密码！' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="用户密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <Link className="login-form-forgot pull-right" to="/user/getpwd/1">找回密码</Link>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.loading}>
            登录
          </Button>
          新用户 <Link to="/user/register">注册</Link> 一个
        </FormItem>
      </Form> 
    )
  }
}

const WrapLoginForm = Form.create()(LoginForm);

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    console.log(store.getState().loadingState)
  }
  handleSubmit(values){
    let self = this;
    self.setState({
      loading: true
    });
    LOGIN_ACTION(values)
    .then(res=>{
      let result = res.data;
      self.setState({
        loading: false
      });
      if(result.state){
        self.setState({
          message: '登录成功'
        })
        localStorage.token = result.token;
        localStorage.account = result.data.username;
        setTimeout(function(){
          self.props.history.push(`/`);
        },2000)
      }else{
        self.setState({
          message: result.message
        })
      }
    })
    .catch(err=>{
      self.setState({
        loading: false
      });
      console.log(err)
    })
  }
  render () {
    return (
      <div className="container">
        <LoginLogo />
        <div className="login">
          <WrapLoginForm loading={this.state.loading} handleSubmit={this.handleSubmit} />
          {!!this.state.message && this.state.message != '登录成功' && (
            <Alert showIcon closable message={this.state.message} type="error" />
          )}
          {this.state.message == '登录成功' && (
            <Alert showIcon closable message={this.state.message} type="success" />
          )}
        </div>
      </div>
    )
  }
}

