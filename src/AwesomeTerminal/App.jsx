import React from 'react';
import styled from 'styled-components';
import Terminal from '../components/Terminal';

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-image: linear-gradient(to right, #00dbde, #fc00ff);
`;

export default function App() {
	return (
		<Wrapper>
			<Terminal />
			<Container></Container>
		</Wrapper>
	);
}
