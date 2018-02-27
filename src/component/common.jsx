import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Input,Button,Rate,Avatar,Icon,Tag,Row,Col } from 'antd';
class MBookItem extends Component {
    render () {
        return (
            <div className="m-book-item">
                <Link className="pic" to="/book/info/bookid">
                    <img src="https://img3.doubanio.com/mpic/s1727290.jpg" alt=""/>
                </Link>
                <div className="info">
                    <h3 className="info-title">
                        <Link to="/book/info/bookid">追风筝的人</Link>
                    </h3>
                    <div className="line">
                    <span>xxx</span>
                    </div>
                    <p className="info-content">
                    12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...
                    </p>
                    <div>
                        {/* <a href="javascript:;" className="a">评论800+</a>&nbsp;&nbsp;&nbsp;
                        <span className="gray">(阅读1800+)</span> */}
                        <Tag color="pink">出版</Tag>
                        <Tag color="red">red</Tag>
                    </div>
                </div>
            </div>
        )
    }
}

class Search extends Component{
    render (){
        return (
            <div className="search">
                <div className="search-wrapper">
                    <Input.Search 
                        placeholder="输入书名或作者"
                        style={{ width: '80%' }}
                        size="large"
                        onSearch={value => console.log(value)} />
                </div>
            </div>
        )
    }
}

class MBookInfo extends Component{
    constructor(props){
        super(props);
    }


    render (){
        return (
            <div className="m-book-info">
                <span className="pic">
                    <img src="https://img3.doubanio.com/mpic/s1727290.jpg" alt=""/>
                </span>
                <div className="info">
                    <h2 className="info-title">
                    <span>追风筝的人</span>
                    </h2>
                    <div className="line">
                    <span>xxx</span>
                    </div>
                    <div className="line">
                    <span>
                        <Rate allowHalf value={this.props.value} onChange={this.props.handleChange}/>
                        ({this.props.value}分)
                    </span>
                    </div>
                    <p className="info-content">
                    12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...
                    </p>
                    <div className="p">
                        <Tag color="pink">出版</Tag>
                        <Tag color="red">red</Tag>
                    </div>
                    <div>
                        <Button type="primary" htmlType="button" onClick={this.props.LinkReading}>开始阅读</Button>&nbsp;&nbsp;&nbsp;
                        <Button type="primary" htmlType="button" onClick={this.props.openDirectory}>目录</Button>&nbsp;&nbsp;&nbsp;
                        <Button  htmlType="button">加入书架</Button>
                    </div>
                </div>
            </div>
        )
    }
}

class Media extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:true,
            hide:false
        }
        this.showReply = this.showReply.bind(this);
        this.closeReply = this.closeReply.bind(this)
    }
    showReply(){
        this.setState({show:false,hide:true})
    }
    closeReply(){
        this.setState({show:true,hide:false})
    }
    render(){
        return (

            <div className="media">
                <div className="media-left">
                    <Avatar className="pull-left" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                </div>
                <div className="media-body">
                    <div className="media-header"><Link to="/personal">sgdy</Link></div>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
                    <div className="clearfix media-footer text-right">
                        <a href="javascript:;">
                        <Icon type="dislike-o"/>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="javascript:;">
                        <Icon type="like-o"/>
                        </a>&nbsp;&nbsp;&nbsp;
                        {this.state.show &&
                        <a href="javascript:;" onClick={this.showReply}>回复</a>
                        }
                    </div>

                    {this.state.hide &&
                    <div className="reply">
                        <form className="replyForm">
                            <div className="reply-body">
                                <Input placeholder="回复内容..." />
                            </div>
                            <div className="reply-right">
                                <Button type="primary"  htmlType="button">发送</Button>
                                <Button  htmlType="button" onClick={this.closeReply}>取消</Button>
                            </div>
                        </form>
                    </div>
                    }
                </div>
          </div>
        )
    }
}

class BookDirectory extends Component{
    render(){
        let sections = this.props.sections || [];
        return(
            <div className="book-directory">
                <Row>
                {
                    sections.map((section,index)=>{
                        return (<Col lg={12} key={index}>{section}</Col>)
                    })
                }
                </Row>  
            </div>
        )
    }
}

class MPagination extends Component{
    render(){
        let isFirstIndex = this.props.currentIndex == 1;
        let isLastIndex = this.props.currentIndex == this.props.total; 
        return(
            <div className="m-pagination">
                <Button type="primary" disabled={isFirstIndex} icon="arrow-left" shape="circle" ghost></Button>
                <Button type="primary" disabled={isLastIndex} icon="arrow-right" shape="circle" ghost></Button>
            </div>
        )
    }
}
MPagination.propTypes = {
    currentIndex: PropTypes.number,
    total: PropTypes.number
}

export {
    MBookItem,
    MBookInfo,
    Search,
    Media,
    BookDirectory,
    MPagination
} 