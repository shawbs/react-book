import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router-dom';

import '../../style/login.scss';

import store from '../../store/store';
import {doLogin} from '../../store/action';



import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



class LoginForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('表单提交的数据: ', values);
        store.dispatch(doLogin());
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;


    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem hasFeedback>
          {getFieldDecorator('userName', {
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
          <Button type="primary" htmlType="submit" className="login-form-button">
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
  }
  componentDidMount(){
  }
  render () {
    return (
      <div className="container">
        <div className="login-logo">
            <Link to="/">SG</Link>
        </div>
        <div className="login">
          <WrapLoginForm />
        </div>
      </div>
    )
  }
}

