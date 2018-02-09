import React, { Component } from 'react'
import {IndexLink,Link} from 'react-router'

import {Menu,Dropdown,Icon,Input,Avatar } from 'antd'
import logo from '../asset/logo.svg'

class HeaderBase extends Component {
    render () {
        return (
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <IndexLink to="/" className="logo">
                            <img src={logo} alt=""/>
                        </IndexLink>
                    </div>
                </div>
            </div>
        )
    }
}

const menu = (
    <Menu>
    <Menu.Item key="0">
      <a href="/">用户设置</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1"><Link to="/user/login">退出</Link></Menu.Item>
  </Menu>
)

class Header extends Component{
    render (){
        return (
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        
                        <div className="nav-header">
                            <IndexLink to="/" className="logo">
                                <img src={logo} alt=""/>
                            </IndexLink>
                            <ul>
                                <li>
                                    <IndexLink to="/" className="active">首页</IndexLink>
                                </li>
                                <li>
                                    <Link to="/book">书库</Link>
                                </li>
                                <li>
                                    <Link to="/personal">个人</Link>
                                </li>
                            </ul>
                            {this.props.hasSearch &&
                            <Input.Search 
                                placeholder="输入书名或作者"
                                style={{ width: 300 }}
                                size="large"
                                onSearch={value => console.log(value)} />
                            }
                        </div>
                        <div className="nav-header-right">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <button className="ant-dropdown-link">
                                <Avatar className="pull-left" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>    
                                admin <Icon type="down" />
                                </button>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { HeaderBase, Header }