import React, { Component } from 'react';
import QRCode from '../../components/qrCode/QRCode';
import './SignUp.css';

class SignUp extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex
        };
    }
	render() {
		console.log(this.state.shownIndex);
		return (
			<div className="view view-signup" style={this.state.shownIndex == 0?{display:"block"}:{display:"none"}}>

				<form className="zu-side-login-box" action="/register/email" id="sign-form-1" method="POST">
				
					<div className="group-inputs">


						<div className="name input-wrapper">
							<input required="" type="text" name="fullname" placeholder="姓名" />
						</div>
						<div className="email input-wrapper">

							<input required="" type="text" className="account" name="phone_num" placeholder="手机号" />

						</div>
						<div className="input-wrapper">
							<input required="" type="password" name="password" placeholder="密码（不少于 6 位）" />
						</div>

					</div>
					<div className="button-wrapper command">
						<button className="sign-button submit" type="submit">注册知乎</button>
					</div>

				</form>

				<p className="agreement-tip">点击「注册」按钮，即代表你同意<a href="/terms" target="_blank">《知乎协议》</a></p>

				<a className="signup-entry--org" href="/org/signup">注册机构号</a>

				<QRCode />
		


			</div>
		);
	}
	
}

export default SignUp;