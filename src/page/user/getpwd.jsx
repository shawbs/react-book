import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../../style/login.scss';
import {Form,Input,Button,Col} from 'antd'
const FormItem = Form.Item;

const formItemLayout ={
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
const tailFormItemLayout ={
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const GetPwd = (<div className="getpwd">
            <Form>
              <p><b>我们会发送一条邮件到您的邮箱,请在邮箱中确认链接并进行后续操作</b></p>
              <FormItem>
                <div className="flexrow">
                    <Input type="eamil" className="input-control" placeholder="输入注册时的邮箱" />&nbsp;&nbsp;
                    <Button type="primary">发送</Button>
                </div>
              </FormItem>
            </Form>
          </div>)

const SetPwd = (<div className="getpwd">
            <Form>
              <FormItem {...formItemLayout} label="新密码">
                  <Input type="password" className="input-control" placeholder="输入新密码" />
              </FormItem>
              <FormItem {...formItemLayout} label="确认密码">
                  <Input type="password" className="input-control" placeholder="确认密码" />
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">确定</Button>&nbsp;&nbsp;
                <Button type="default" htmlType="reset">重置</Button>
              </FormItem>
            </Form>
          </div>)

export default class Getpwd extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this)
    document.title = this.props.match.params.index==1 ? '找回密码' : '设置新密码'
  }
  render(){
    let current_index = this.props.match.params.index
    let getpwd;
    if(current_index == 1){
      getpwd = GetPwd;
    }else{
      getpwd = SetPwd;
    }
    return(
        <div className="container">
          <div className="login-logo">
              <Link to="/">SG</Link>
          </div>
          {getpwd}
        </div>
    )
  }
}