import React, { Component } from 'react';
import SliderBar from '../../components/sliderBar/SliderBar.js';
import './Nav.css';

class Nav extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex
        };
    }
	render() {
		return (
			<div className="index-tab-navs">
				<div className="navs-slider">
					<a href="#signup" className={this.state.shownIndex == 0?"active":""}>注册</a>
					<a href="#signin" className={this.state.shownIndex == 1?"active":""}>登录</a>
					<SliderBar shownIndex={this.state.shownIndex} />
					
				</div>
			</div>
		);
	}
	
}

export default Nav;