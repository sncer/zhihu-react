import React, { Component } from 'react';
//import './Nav.css';

class SignIn extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex
        };
    }
	render() {
		console.log(this.state.shownIndex);
		return (
			<div className="view view-signin" style={this.state.shownIndex == 1?{display:"block"}:{display:"none"}}>
				<form>
				    <div className="group-inputs">
				        <div className="account input-wrapper">
				            <input type="text" name="account" placeholder="手机号或邮箱" required="" />
				        </div>
				        <div className="verification input-wrapper">
				            <input type="password" name="password" placeholder="密码" required="" />
				            <button type="button" className="send-code-button">获取验证码</button>
				        </div>
				        
				    </div>
				    <div className="button-wrapper command">
				        <button className="sign-button submit" type="submit">登录</button>
				    </div>
				    <div className="signin-misc-wrapper clearfix">
				        <button type="button" className="signin-switch-button">手机验证码登录</button>
						<a className="unable-login" href="#">无法登录？</a>
				 
				    </div>
				    <div className="other-signup-wrapper">
						<span className="name signin-switch-qrcode-buttons">二维码登录</span>
						 
						<span className="signup-footer-separate signup-footer-se"> · </span>
						 
						<span className="name signup-social-buttons js-toggle-sns-buttons">社交帐号登录</span>
				 
				        <div className="sns-buttons">
							<a title="微信登录" className="js-bindwechat" href="#"><i className="sprite-index-icon-wechat"></i></a>
							 
							<a title="微博登录" className="js-bindweibo" href="#"><i className="sprite-index-icon-weibo"></i></a>
							 
							<a title="QQ 登录" className="js-bindqq" href="#"><i className="sprite-index-icon-qq"></i></a>
				 
				        </div>
				    </div>
				</form>
			</div>
		);
	}
	
}

export default SignIn;