import React, { Component } from 'react';
//import './Nav.css';

class Nav extends Component {
	render() {
		return (
			<div className="navs-slider">
				<a href="#signup" className="active">注册</a>
				<a href="#signin" className="">登录</a>
				<span className="navs-slider-bar"></span>
			</div>
		);
	}
	
}

export default Nav;