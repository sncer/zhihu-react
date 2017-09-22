import React, { Component } from 'react';


class SMSSignInForm extends Component {
	constructor(props){
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps){
    	this.setState({
            
        });
    }
    
	render() {
		return (
			<form>
                <div className="group-inputs">
                    <div className="account input-wrapper">
                        <input type="tel" name="account" placeholder="手机号" required="" />
                    </div>
                    <div className="verification input-wrapper">
                        <input type="number" name="verification_code" placeholder="短信验证码" required="" />
                        <button type="button" className="send-code-button">获取验证码</button>
                    </div>
                    
                </div>
                <div className="button-wrapper command">
                    <button className="sign-button submit" type="submit">登录</button>
                </div>
                
            </form>
		);
	}
	
}

export default SMSSignInForm;