import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import SignIn from "../../components/signIn/SignIn"
import SignUp from "../../components/signUp/SignUp"
import './Tab.css';

class Tab extends Component {
	constructor(props){
        super(props);
        this.state = {
        	shownIndex: 1
        };
    }
	render() {
		return (
			<div className="sign-flow clearfix">
				<Nav shownIndex={this.state.shownIndex} />
				<SignUp shownIndex={this.state.shownIndex} />
				<SignIn shownIndex={this.state.shownIndex} />
			</div>
		);
	}
	
}

export default Tab;