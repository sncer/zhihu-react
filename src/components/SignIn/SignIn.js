import React, { Component } from 'react';
import QRCode from '../../components/qrCode/QRCode';
import './SignIn.css';
import QRCodeImg from '../../images/qr-code2.png'

class SignIn extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex,
            isSnsShown:false,
            isQrcodeShown:true
        };
    }
    componentWillReceiveProps(nextProps){
    	this.setState({
            shownIndex: nextProps.shownIndex
        });
    }
    changeSnsvisibility(){
		this.setState({
            isSnsShown: !this.state.isSnsShown
        });
    }
    changeQrcodeShown(){
    	this.setState({
            isQrcodeShown: !this.state.isQrcodeShown
        });
    }
	render() {
		// console.log(this.state.shownIndex);
		return (
			<div className="view view-signin" style={this.state.shownIndex == 1?{display:"block"}:{display:"none"}}>
				<form style={this.state.isQrcodeShown?{display:"none"}:{display:"block"}}>
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
						<span className="name" onClick={()=>this.changeQrcodeShown()}>二维码登录</span>
						 
						<span className="signup-footer-separate signup-footer-se"> · </span>
						 
						<span className="name signup-social-buttons js-toggle-sns-buttons" onClick={()=>this.changeSnsvisibility()}>社交帐号登录</span>
				 
				        <div className={this.state.isSnsShown?"sns-buttons is-visible":"sns-buttons"} style={this.state.isSnsShown?{visibility: "visible"}:{visibility: "hidden"}}>
							<a title="微信登录" className="js-bindwechat" href="#"><i className="sprite-index-icon-wechat"></i></a>
							 
							<a title="微博登录" className="js-bindweibo" href="#"><i className="sprite-index-icon-weibo"></i></a>
							 
							<a title="QQ 登录" className="js-bindqq" href="#"><i className="sprite-index-icon-qq"></i></a>
				 
				        </div>
				    </div>
				</form>
				<div className="qrcode-signin-container" style={this.state.isQrcodeShown?{display:"block"}:{display:"none"}}>
					<div className="step1">
						<div className="img-wrapper">
							<img src={QRCodeImg}/>
						</div>
						<p>打开最新 <a href="https://www.zhihu.com/app/" target="_blank">知乎 App</a></p>
						<p>在「更多」页面右上角打开扫一扫</p>
						<div className="cut-button">
							<span onClick={()=>this.changeQrcodeShown()}>使用密码登录</span>
						</div>
					</div>
					<div className="step2">
						<div className="scan-status"></div>
						<p className="scan-tips">扫描成功</p>
						<p>请在手机上「确认登录」</p>
						<div className="cut-button">
							<span>返回二维码</span>
						</div>
					</div>
					<div className="failure">
						<div className="icon"></div>
						<p className="message"></p>
						<div className="cut-button">
							<span>使用密码登录</span>
						</div>
					</div>
					<div className="guide"></div>
				</div>
				<QRCode />
			</div>
		);
	}
	
}

export default SignIn;