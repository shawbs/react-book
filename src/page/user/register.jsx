import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router-dom';

import '../../style/login.scss';
import {LoginLogo} from '../../component/common';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class RegisterForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('表单提交的数据: ', values);
      }
    });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    //表单项布局
    const formItemLayout = {
      labelCol: {
        xs: {span:24},
        sm: {span:6}
      },
      wrapperCol: {
        xs: {span:24},
        sm: {span:14}
      }
    }
    //偏移项的布局
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    }
    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem hasFeedback {...formItemLayout} label="用户名">
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: '请输入邮箱!' },
              { type: 'email', message: '请输入正确的邮箱'}
            ],
          })(
            <Input type="email" placeholder="请输入邮箱"/>
          )}
        </FormItem>
        <FormItem hasFeedback {...formItemLayout} label="用户密码">
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入用户密码！' },
              { min: 6,message:'输入6以上位数的密码'}
            ]
          })(
            <Input type="password" placeholder="用户密码" />
          )}
        </FormItem>
        <FormItem hasFeedback {...formItemLayout} label="确认密码">
          {getFieldDecorator('password_confirm',{
            rules: [
              { required: true, message: '请确认用户密码！' },
              { validator: this.checkPassword}
            ]
          })(
            <Input type="password" placeholder="用户密码" />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout }>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>同意协议<Link to="/agreement">&lt;&lt;agreement&gt;&gt;</Link></Checkbox>
          )}     
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
          注册
          </Button>&nbsp;&nbsp;&nbsp;
          <Button  htmlType="reset" className="login-form-button">
          重置
          </Button>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          已有帐户 <Link to="/user/login">登录</Link>
        </FormItem>
      </Form> 
    )
  }
}

const WrapRegisterForm = Form.create()(RegisterForm);

export default class Register extends Component{
  render () {
    return (
      <div className="container">
        <LoginLogo />
        <div className="register">
          <WrapRegisterForm />
        </div>
      </div>
    )
  }
}

