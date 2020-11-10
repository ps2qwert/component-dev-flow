/*
 * @Author: PengKang
 * @Date: 2020-06-22 17:10:11
 * @LastEditors: PengKang
 * @LastEditTime: 2020-09-08 10:32:01
 * @FilePath: \react-library\src\components\portal.js
 */
import React from "react";
import ReactDOM from "react-dom";

const bodyRoot = document.querySelector("body");
console.log("test124");
export default class Portal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}

	componentDidMount() {
		bodyRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		bodyRoot.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}
