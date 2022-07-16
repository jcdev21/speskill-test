import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import TableListProduct from '../components/Table';

const Container = styled.div`
	width: 100%;
	padding: 5em;
	background-color: #ebf1f1;
`;

export default function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(
				`https://spe-academy.spesolution.net/api/recruitment`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y',
					},
				}
			);

			const resData = await res.json();
			setProducts(resData);
		};

		getData();
	}, []);

	return (
		<Container>
			<TableListProduct
				dataProduct={products}
				header={['', 'product', 'quantity', 'subtotal']}
			/>
		</Container>
	);
}
