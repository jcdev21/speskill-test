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

	@media (max-width: 960px) {
		position: relative;
		transform: rotate(0) translate(0, 0);
	}
`;

const Title = styled.h1`
	margin-left: 150px;
	margin-bottom: 10px;
`;

const TimeStamp = styled.p`
	position: absolute;
	top: 50%;
	left: 0px;
	transform: rotate(90deg);
`;

export default function Terminal({ dateTime }) {
	return (
		<Container>
			<Title>
				{'<'}SPE / FRONTEND{'>'}
			</Title>
			<TimeStamp>{dateTime.toString()}</TimeStamp>
		</Container>
	);
}
