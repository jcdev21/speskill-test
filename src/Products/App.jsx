import React, { useCallback, useEffect, useState } from 'react';

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
			console.log(resData);
		};

		getData();
	}, []);

	return (
		<div>
			<ul>
				{products.map(({ product, quantity }, i) => (
					<li key={product.code}>
						<p>{product.code}</p>
						<h3>{product.name}</h3>
						<p>{product.price}</p>
						<p>{product.stock} in Stock</p>
					</li>
				))}
			</ul>
		</div>
	);
}
