import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Terminal from '../components/Terminal';

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;

	@media (max-width: 960px) {
	}
`;

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-image: linear-gradient(to right, #00dbde, #fc00ff);
`;

export default function App() {
	const [dateTime, setDateTime] = useState('');

	React.useEffect(() => {
		const zeroFill = (n) => {
			return ('0' + n).slice(-2);
		};

		const interval = setInterval(() => {
			const now = new Date();

			const dateTime =
				zeroFill(now.getMonth() + 1) +
				'/' +
				zeroFill(now.getUTCDate()) +
				'/' +
				now.getFullYear() +
				' ' +
				zeroFill(now.getHours()) +
				':' +
				zeroFill(now.getMinutes()) +
				':' +
				zeroFill(now.getSeconds());

			setDateTime(dateTime);
		}, 1000);
		return () => {
			clearInterval(dateTime);
		};
	}, []);

	return (
		<Wrapper>
			<Terminal dateTime={dateTime} />
			<Container></Container>
		</Wrapper>
	);
}
