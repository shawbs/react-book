import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Affix,Button,Dropdown,Icon,Avatar,Switch,Modal} from 'antd';
import {BookDirectory,MPagination} from '../../component/common';

import {Header} from '../../component/header';

import '../../style/reading.scss';

import * as util from '../../script/util';
export default class BookReading extends Component{
    constructor(props){
        super(props);
        this.state={
            fontF: 'ht',
            fontFamily: '黑体',
            fontSize: 14,
            theme: 'white',
            visible: false
        }
        this.themeSelect = this.themeSelect.bind(this);
        this.themeSelect2 = this.themeSelect2.bind(this);
        this.fontSelect = this.fontSelect.bind(this);
        this.plusFontSize = this.plusFontSize.bind(this);
        this.minusFontSize = this.minusFontSize.bind(this);
        this.openDirectory = this.openDirectory.bind(this);
        this.closeDireactory = this.closeDireactory.bind(this);
    }
    themeSelect(e){
        let target = e.target;
        let parent = target.parentNode;
        parent.normalize();
        parent.childNodes.forEach(element => {
            util.removeClass(element,'active');
        });
        util.addClass(target,'active');
        this.setState({
            theme: target.dataset.type
        })
    }
    themeSelect2(checked){
        let theme = checked ?  'dark' : 'white';
        this.setState({
            theme: theme
        })
    }
    fontSelect(e){
        let activeType = e.target.dataset.type;
        this.setState({
            fontF: activeType,
            fontFamily: this.getFontFamily(activeType)
        })
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
    plusFontSize(){
        let size = this.state.fontSize+1
        this.setState({
            fontSize: size
        })
    }
    minusFontSize(){
        let size = this.state.fontSize-1
        this.setState({
            fontSize: size
        })
    }
    
    getFontFamily(activeType){
        let o = {};
        o['ht'] = '黑体';
        o['yh'] = '微软雅黑';
        o['st'] = '宋体';
        return o[activeType];
    }
    render(){
        let isActive = true;
        return(
            <div className={"book-reading-page " + this.state.theme}>
                <div className="container">
                    <div className="nav">

                        <Button onClick={this.openDirectory} type="primary" ghost={isActive}>目录</Button>
                        <Link to="/book/info/bookid">
                            <Button type="primary" ghost>封面</Button>
                        </Link>
                        <Button.Group>
                            <Button type="primary" ghost onClick={this.plusFontSize}>字体+</Button>
                            <Button type="primary" ghost onClick={this.minusFontSize}>字体-</Button>
                        </Button.Group>
                        <Button.Group>
                            <Button type="primary" onClick={this.fontSelect} ghost={this.state.fontF!="yh"} data-type="yh">微黑</Button>
                            <Button type="primary" onClick={this.fontSelect} ghost={this.state.fontF!="st"} data-type="st">宋体</Button>
                            <Button type="primary" onClick={this.fontSelect} ghost={this.state.fontF!="ht"} data-type="ht">黑体</Button>
                        </Button.Group>
                        

                        {/* <div className="color-group">
                            <span onClick={this.themeSelect} className="white circle active" data-type="white"></span>
                            <span onClick={this.themeSelect} className="dark circle" data-type="dark"></span>
                            <span onClick={this.themeSelect} className="green circle" data-type="green"></span>
                        </div> */}

                        <Switch checkedChildren="夜" unCheckedChildren="白" onChange={this.themeSelect2}/>

                        <div>
                        <Link to="/">
                            <Icon type="home" className="homeLink"/>
                        </Link>
                        <Link to="/personal">
                            <Avatar className="pull-left" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>    
                        </Link>
                        </div>




                    </div>

                    <div className="wrapper" style={{fontFamily:this.state.fontFamily,fontSize:this.state.fontSize+'px'}}>
                    


                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                        <p>12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟...</p>
                    </div>
                </div>
                <MPagination  currentIndex={1} total={5}/>
                <Modal
                    title={`目录`}
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