import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';

import {MBookInfo,Media} from '../../component/common';
import {Header} from '../../component/header';
import {Row,Col,Breadcrumb,Input,Button,} from 'antd';
export default class BookInfo extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      rateValue:0
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){

  }
  handleChange (value){
    this.setState({
      rateValue:value
    })
  }
  render(){
    let bookname = this.props.router.params.name;
    return(
      <div className="bookinfo-page">
        <Header hasSearch={true}/>
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item><IndexLink to="/">首页</IndexLink></Breadcrumb.Item>
            <Breadcrumb.Item>详情页</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col span={16}>
              <MBookInfo value={this.state.rateValue} bookId="123" handleChange={this.handleChange}/>

              <form className="commentForm">
                <Input.TextArea row={3} placeholder="输入评论"></Input.TextArea>
                <div className="clearfix margin-vertical">
                <Button className="pull-right" type="primary" htmlType="button">发送</Button> 
                </div>
              </form>
              <div className="comment">
                <Media />
                <Media />
                <Media />
              </div>
            </Col>
          </Row>
        </div>  
      </div>
    )
  }
}