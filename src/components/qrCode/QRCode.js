import React, { Component } from 'react';
import './QRCode.css';

class QRCode extends Component {
	render() {
		return (
			<div className="QRCode">
				<button className="QRCode-toggleButton">
					<span className="sprite-global-icon-qrcode"></span>
					<span className="QRCode-toggleButtonText ">下载知乎 App</span>
				</button>
				<div className="QRCode-card">
					<div className="QRCode-image"></div>
					<div className="sprite-index-icon-arrow"></div>
				</div>
			</div>
			
		);
	}
	
}

export default QRCode;