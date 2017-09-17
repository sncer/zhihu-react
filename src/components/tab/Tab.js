import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
// import SignIn from "../../components/signIn/SignIn"
import SignUp from "../../components/signUp/SignUp"
import './Tab.css';

class Tab extends Component {
	render() {
		return (
			<div className="sign-flow clearfix">
				<div className="index-tab-navs">
					<Nav />
				</div>
				<SignUp />
				
			</div>
		);
	}
	
}

export default Tab;