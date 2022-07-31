import React from 'react';
import Filter from './Filter';
import { property } from '../fakeData.json';

const Home = () => {
	return (
		<div className="container mt-4 home">
			<div className="my-3">
				<h2>Search properties to rent</h2>
			</div>
			<Filter properties={property} />
		</div>
	);
};

export default Home;
