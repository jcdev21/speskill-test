import { Suspense, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import AwesomeTerminal from './AwesomeTerminal/App';
import Products from './Products/App';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Button = styled.button`
	border: none;
	min-width: 20px;
	background-color: slateblue;
	color: #eeeeee;
	font-weight: 700;
	padding: 10px 15px;
	border-radius: 5px;
	cursor: pointer;
`;

const Homepage = () => {
	return (
		<Container>
			<Link to="/awesome-terminal">
				<Button>Terminal</Button>
			</Link>
			<Link to="/products">
				<Button>Products</Button>
			</Link>
		</Container>
	);
};

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route
					path="/awesome-terminal"
					element={
						<Suspense fallback={<>Loading...</>}>
							<AwesomeTerminal />
						</Suspense>
					}
				/>
				<Route
					path="/products"
					element={
						<Suspense fallback={<>Loading...</>}>
							<Products />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
