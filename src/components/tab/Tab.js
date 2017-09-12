import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
//import './Form.css';

class Tab extends Component {
	render() {
		return (
			<div className="sign-flow clearfix">
				<div className="index-tab-navs">
					<Nav />
				</div>
				<div className="view view-signin">
				</div>
				
			</div>
		);
	}
	
}

export default Tab;