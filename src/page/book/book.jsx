import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../../component/header';
import {MBookItem,Search} from '../../component/common';
import {Tag,Row,Col,Pagination,Affix   } from 'antd';
import Footer from '../../component/footer';
import '../../style/book.scss';
export default class Book extends Component{
  render(){
    return(
      <div className="book-page">
        <Header/>
        <Affix offsetTop={20}>
          <Search />
        </Affix>
        <div className="container">
          
          <Row>
            <Col span={8}>
              <Affix offsetTop={120}>
              <h1 className="title">分类</h1>
              <div className="tag-box">
                <Tag color="pink">玄幻</Tag>
                <Tag color="red">武侠</Tag>
                <Tag color="orange">修真</Tag>
                <Tag color="green">都市</Tag>
                <Tag color="cyan">架空</Tag>
                <Tag color="blue">网游</Tag>
                <Tag color="purple">女生</Tag>
              </div>
              <h1 className="title">标签</h1>
              <div className="tag-box">
                <Tag color="pink">pink</Tag>
                <Tag color="red">red</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
              </Affix>
            </Col>
            <Col span={16}>
              <div className="book-list">
                <MBookItem />
                <MBookItem />
                <MBookItem />
                <MBookItem />
                <MBookItem />
                <MBookItem />
              </div>

            </Col>
          </Row> 
        </div>
        <Footer />
      </div>
    )
  }
}