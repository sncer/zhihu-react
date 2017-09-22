import React, { Component } from 'react';


class SignInForm extends Component {
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
                        <input type="text" name="account" placeholder="手机号或邮箱" required="" />
                    </div>
                    <div className="verification input-wrapper">
                        <input type="password" name="password" placeholder="密码" required="" />
                    </div>
                    
                </div>
                <div className="button-wrapper command">
                    <button className="sign-button submit" type="submit">登录</button>
                </div>
                
            </form>
		);
	}
	
}

export default SignInForm;