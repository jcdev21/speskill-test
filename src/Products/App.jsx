import React, { useCallback, useEffect, useState } from 'react';

export default function App() {
	const [data, setData] = useState([]);

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
			setData(resData);
			console.log(resData);
		};

		getData();
	}, []);

	return <div>App</div>;
}
