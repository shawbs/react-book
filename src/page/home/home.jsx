import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Row,Col,Carousel,Card,Tag,Input   } from 'antd';
import {MBookItem} from '../../component/common';
import {Header} from '../../component/header';
import Footer from '../../component/footer';

export default class Home extends Component{
  componentDidMount(){
    // console.log(this.props)
  }
  render(){
    return(
      <div className="home-page">
        <Header hasSearch/>
        <div className="container">
          <div className="hot-book">
            <h1 className="title">热门作品</h1>
            <Carousel effect="fade" autoplay>
              <div className="book-item">
                <ul className="book-nav">
                  <li>
                    <Link to="/bookinfo/asd" className="book">
                      <div className="img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503646813491&di=51ee160d077d1baca9365f5a368855c1&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F99%2F54%2F15995497-6276f5ee7349771689b1b20204e3fcbc-1.jpg" alt=""/>
                      </div>
                      <p>bookname</p>
                    </Link>
                  </li>

                </ul>

              </div>
              <div className="book-item">2</div>
              <div className="book-item">3</div>
            </Carousel >
          </div>
          <h1 className="title">推荐作品</h1>
          <Row gutter={16+8}>
            <Col span={12}>
              <div className="book-list">
                <MBookItem />
                <MBookItem />
                <MBookItem />
              </div>
            </Col>
            <Col span={12}>
              <div className="book-list">
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
