import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {MBookInfo,Media,BookDirectory} from '../../component/common';
import {Header} from '../../component/header';
import {Row,Col,Breadcrumb,Input,Button,Modal} from 'antd';
export default class BookInfo extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      rateValue:0,
      visible: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.LinkReading = this.LinkReading.bind(this);
    this.openDirectory = this.openDirectory.bind(this);
    this.closeDireactory = this.closeDireactory.bind(this);
    this.bookname = this.props.match.params.bookname || '默认书名';
    this.bookid = this.props.match.params.bookid;
  }
  componentDidMount(){
    console.log(this)
  }
  LinkReading(){
    this.props.history.push(`/book/reading/${this.bookid}`)
  }
  openDirectory(){
    this.setState({
      visible: true
    })
  }
  closeDireactory(){
    this.setState({
      visible: false
    })
  }
  handleChange (value){
    this.setState({
      rateValue:value
    })
  }
  render(){

    return(
      <div className="bookinfo-page">
        <Header hasSearch={true}/>
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{this.bookname}</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col span={16}>
              <MBookInfo 
                value={this.state.rateValue} 
                bookId={this.bookid} 
                handleChange={this.handleChange}
                LinkReading = {this.LinkReading}
                openDirectory = {this.openDirectory}
              />

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
        <Modal
          title={`${this.bookname} 目录`}
          visible={this.state.visible}
          closable={false}
          footer={null}
          width={'60%'}
          mask={false}
          bodyStyle={{maxHeight:'400px',overflowY:'auto'}}
          onCancel={this.closeDireactory}
        >
          <BookDirectory sections={[1,2,3]}/>
        </Modal>
      </div>
    )
  }
}