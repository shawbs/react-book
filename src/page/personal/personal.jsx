import React,{Component} from 'react';
import {Link} from 'react-router';

import {Header} from '../../component/header';
export default class Personal extends Component{
  render(){
    return(
      <div className="personal-page">
        <Header hasSearch={true}/>
        <div className="container">
          Personal
        </div>     
      </div>
    )
  }
}