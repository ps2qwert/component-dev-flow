/*
 * @Author: PengKang
 * @Date: 2020-09-08 10:32:26
 * @LastEditors: PengKang
 * @LastEditTime: 2020-09-08 15:48:03
 * @FilePath: \react-library\src\components\Button.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
const StyledButton = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0.5em 1em;
	padding: 0.25em 1em;

	${(props) =>
		props.primary &&
		css`
			background: palevioletred;
			color: white;
		`}
`;

const Container = styled.div`
	text-align: center;
`;

const Button = () => {
	return (
		<div>
			<StyledButton primary>This my button component</StyledButton>
			<div
				css={css`
					background: transparent;
					border-radius: 3px;
					border: 2px solid palevioletred;
					color: palevioletred;
					margin: 0.5em 1em;
					padding: 0.25em 1em;
				`}
			>
				Primary Button
			</div>
		</div>
	);
};

export default Button;
