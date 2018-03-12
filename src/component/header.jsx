import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {Menu,Dropdown,Icon,Input,Avatar,Badge,Modal,Radio  } from 'antd'
import logo from '../asset/logo.png'

class HeaderBase extends Component {
    render () {
        return (
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <Link to="/" className="logo">
                            <img src={logo} alt=""/>  
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}



class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            messageVisible: false
        }
        this.openSetting = this.openSetting.bind(this);
        this.closeSetting = this.closeSetting.bind(this);
        this.openMessage = this.openMessage.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }
    openSetting(){
        console.log(1)
        this.setState({
            visible: true
        })
    }
    closeSetting(){
        this.setState({
            visible: false
        })
    }
    openMessage(){
        this.setState({
            messageVisible: true
        })
    }
    closeMessage(){
        this.setState({
            messageVisible: false
        })
    }
    changeMode(e){
        console.log(`radio checked:${e.target.value}`)
    }
    render (){
        const menu = (
            <Menu onClick={this.openSetting}>
                <Menu.Item key="0">
                    用户设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1"><Link to="/user/login">退出</Link></Menu.Item>
            </Menu>
        )

        return (
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        
                        <div className="nav-header">
                            <Link to="/" className="logo">
                                <img src={logo} alt=""/> 
                            </Link>
                            <ul>
                                <li>
                                    <Link to="/" className="active">首页</Link>
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
                                onSearch={value => console.log(value)} 
                                enterButton
                            />
                            }
                        </div>
                        <div className="nav-header-right">

                            <Badge dot className="a" onClick={this.openMessage}>
                                <Icon type="bell" />
                            </Badge>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <button className="ant-dropdown-link">
                                <Avatar className="pull-left" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>    
                                admin <Icon type="down" />
                                </button>
                            </Dropdown>
                        </div>
                    </div>
                    <Modal
                        title={`设置`}
                        visible={this.state.visible}
                        closable={false}
                        footer={null}
                        width={500}
                        mask={false}
                        onCancel={this.closeSetting}
                    >
                    <Radio.Group onChange={this.changeMode} defaultValue="a">
                        <Radio.Button value="a">普通模式</Radio.Button>
                        <Radio.Button value="b">单人模式</Radio.Button>
                    </Radio.Group>
                    </Modal>
                    <Modal
                        title={`消息`}
                        visible={this.state.messageVisible}
                        closable={false}
                        footer={null}
                        width={300}
                        mask={false}
                        onCancel={this.closeMessage}
                    >

                    </Modal>
                </div>
            </div>
        )
    }
}

export { HeaderBase, Header }