import React, {Component} from 'react';
import {
	Router,
	Route,
	IndexRoute,
    browserHistory,
    hashHistory
} from 'react-router';

//导入组件
import App from '../App/App';
import User from '../page/user';
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
		<Router history={browserHistory}>
			<Route path="/" component={App}>

				<IndexRoute component={Home} /> 

				<Route path="searchResult(/:bookname)" component={Search} />
				<Route path="book" component={Book} />
				<Route path="book/info(/:bookid)" component={BookInfo} />
				<Route path="book/reading/:bookid" component={BookReading} />

				<Route path="personal" component={Personal} />
				<Route path="agreement" component={Agreement} />

				<Route path="user" component={User}>
					<Route path="login" component={Login}/>
					<Route path="register" component={Register}/>
					<Route path="getpwd/:index" component={Getpwd}/>
				</Route>
				

				{/* 404 */}
				<Route path="**" component={NotFound} />
			</Route>

		</Router>
)

export default routes;