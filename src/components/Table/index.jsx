import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
	width: 100%;
	min-height: 100vh;
	border: 0;
	border-spacing: 0;
	background-color: #ffffff;
	padding: 1em;
`;

const Thead = styled.thead`
	background-color: #111111;
	color: #eeeeee;
	height: 40px;
`;

const WrapperImg = styled.div`
	width: 100px;
	height: 100px;
	display: flex;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

	img {
		width: 100%;
		object-fit: cover;
	}
`;

const Info = styled.div`
	padding: 0 1em;

	p.code {
		font-size: 10;
		color: #1b1bee;
	}

	p.price {
		font-size: 9;
	}

	p.stock {
		color: #eb1b1b;
	}
`;

export default function TableListProduct({ dataProduct = [], header = [] }) {
	return (
		<TableWrapper>
			<Thead>
				<tr>
					{header.map((h, i) => (
						<th key={i}>{h}</th>
					))}
				</tr>
			</Thead>
			<tbody>
				{dataProduct.map(({ product, quantity }, i) => (
					<tr key={i}>
						<td>
							<WrapperImg>
								<img
									src={product.media_url}
									alt={product.name}
								/>
							</WrapperImg>
						</td>
						<td>
							<Info>
								<p className="code">{product.code}</p>
								<h3>{product.name}</h3>
								<p className="price">
									{product.price.toLocaleString('id-ID', {
										style: 'currency',
										currency: 'IDR',
									})}
								</p>
								<p className="stock">
									{product.stock} in Stock
								</p>
							</Info>
						</td>
						<td>
							<input
								value={quantity}
								onChange={() => {}}
								placeholder="0"
							/>
						</td>
						<td>
							<div>
								{(quantity * product.price).toLocaleString(
									'id-ID',
									{
										style: 'currency',
										currency: 'IDR',
									}
								)}
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</TableWrapper>
	);
}
