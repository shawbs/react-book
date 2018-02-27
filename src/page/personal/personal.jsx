import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../../component/header';
import {Tabs,Icon,Button} from 'antd';

import '../../style/personal.scss';
export default class Personal extends Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }
  toggleEdit(){
    this.setState({
      edit: !this.state.edit
    })
  }
  render(){
    return(
      <div className="personal-page">
        <Header hasSearch/>
        <div className="container">
          <Tabs defaultActiveKey="1" tabBarExtraContent={<Icon onClick={this.toggleEdit} type="edit" className="a"/>}>
            <Tabs.TabPane tab={<span><Icon type="book" />书架</span>} key="1">
                <ul className="book-nav">
                  <li>
                    <Link to="/book/reading/bookid" className="book">
                      <div className="img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503646813491&di=51ee160d077d1baca9365f5a368855c1&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F99%2F54%2F15995497-6276f5ee7349771689b1b20204e3fcbc-1.jpg" alt=""/>
                      </div>
                      <p>bookname</p>
                    </Link>
                    {this.state.edit&&(
                      <div className="book-edit">
                        <Button type="primary" icon="close" shape="circle" />
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/book/reading/bookid" className="book">
                      <div className="img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503646813491&di=51ee160d077d1baca9365f5a368855c1&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F99%2F54%2F15995497-6276f5ee7349771689b1b20204e3fcbc-1.jpg" alt=""/>
                      </div>
                      <p>bookname</p>
                    </Link>
                    {this.state.edit&&(
                      <div className="book-edit">
                        <Button type="primary" icon="close" shape="circle" />
                      </div>
                    )}
                  </li>
                </ul>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span><Icon type="inbox" />养肥区</span>} key="2">
              Tab 2
            </Tabs.TabPane>
          </Tabs>
        </div>     
      </div>
    )
  }
}