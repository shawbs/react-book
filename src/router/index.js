import React, {Component} from 'react';
import {
	Route,
	Switch,
	BrowserRouter
} from 'react-router-dom';

//导入组件
import App from '../App/App';
import Home from '../page/home/home';
import Login from '../page/user/login';
import Register from '../page/user/register';
import Getpwd from '../page/user/getpwd';
import NotFound from '../page/notfound/notfound';
import Search from '../page/search/search';
import Book from '../page/book/book';
import BookInfo from '../page/bookinfo/bookinfo';
import Personal from '../page/personal/personal';
import BookReading from '../page/book/book-reading';

import Agreement from '../page/other/agreement';


//配置路由
const routes = (

		<BrowserRouter basename="/sgbook/">
			<Switch>

				<Route exact path="/" component={Home} /> 
				<Route  path="/searchResult/:bookname" component={Search} />
				<Route exact path="/book" component={Book} />
				<Route  path="/book/info/:bookid" component={BookInfo} />
				<Route  path="/book/reading/:bookid" component={BookReading} />
				<Route  path="/personal" component={Personal} />
				<Route  path="/agreement" component={Agreement} />

				<Route path="/user/login" component={Login}/>
				<Route path="/user/register" component={Register}/>
				<Route path="/user/getpwd/:index" component={Getpwd}/>
				


				<Route path="**" component={NotFound} />
			</Switch>

		</BrowserRouter>
)

export default routes;