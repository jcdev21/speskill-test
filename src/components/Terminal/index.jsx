import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #111111;
	border: 20px solid #eeeeee;
	border-radius: 20px;
	transform: rotate(-30deg) translate(185px, -50%);
	color: #00ff00;
	position: absolute;
	display: flex;
	align-items: flex-end;
`;

const Title = styled.h1`
	margin-left: 150px;
	margin-bottom: 10px;
`;

const TimeStamp = styled.p`
	position: absolute;
	top: 60%;
	left: -10px;
	transform: rotate(90deg);
`;

export default function Terminal() {
	return (
		<Container>
			<Title>
				{'<'}SPE / FRONTEND{'>'}
			</Title>
			<TimeStamp>21 Juli 2022</TimeStamp>
		</Container>
	);
}
