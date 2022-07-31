import React, { useState } from 'react';
import Properties from './Properties';

const Filter = ({ properties }) => {
	const [newData, setNewData] = useState([...properties]);
	const [location, setLocation] = useState('');
	const [availableDate, setAvailableDate] = useState('');
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [propertyType, setPropertyType] = useState('');

	const filterData = (e) => {
		e.preventDefault();
		let res = [...properties];
		if (location !== '') {
			res = res.filter((res) => res.state === location);
		}
		if (minPrice !== 0 && maxPrice !== 0) {
			res = res.filter((res) => res.rent >= minPrice && res.rent <= maxPrice);
		}
		if (propertyType !== '') {
			res = res.filter((res) => res.type === propertyType);
		}
		if (availableDate !== '') {
			res = res.filter((res) => availableDate >= res.dateAvailable);
		}
		setNewData(res);
	};

	return (
		<div>
			<form
				onSubmit={filterData}
				className="row g-1 d-flex justify-content-center "
			>
				<div className="col-md-2">
					<div className="form-floating">
						<select
							className="form-select"
							id="floatingSelectGrid"
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						>
							<option>Select a location</option>
							<option value="New Delhi">New Delhi</option>
							<option value="Mumbai">Mumbai</option>
							<option value="Hyderabad">Hyderabad</option>
						</select>
						<label for="floatingSelectGrid">Location</label>
					</div>
				</div>
				<div className="col-md-2">
					<div className="form-floating">
						<input
							className="form-control"
							type="date"
							id="foatingSelectGrid"
							value={availableDate}
							onChange={(e) => {
								setAvailableDate(e.target.value);
							}}
						/>
						<label for="floatingSelectGrid">When</label>
					</div>
				</div>
				<div className="col-md-2">
					<div className="form-floating">
						<select
							className="form-select"
							id="floatingSelectGrid"
							onChange={(e) => {
								const str = e.target.value;
								const result = str.trim().split(/\s+/);
								setMinPrice(result[0]);
								setMaxPrice(result[1]);
							}}
						>
							<option value="0">Select a range</option>
							<option value="1000 10000">₹1000-₹10000</option>
							<option value="10000 20000">₹10000-₹20000</option>
							<option value="20000 30000">₹20000-₹30000</option>
						</select>
						<label for="floatingSelectGrid">Range</label>
					</div>
				</div>
				<div className="col-md-2">
					<div className="form-floating">
						<select
							className="form-select"
							id="floatingSelectGrid"
							onChange={(e) => {
								setPropertyType(e.target.value);
							}}
						>
							<option value="">Select property type </option>
							<option value="house">House</option>
							<option value="office">Office</option>
							<option value="industrial">Industrial</option>
						</select>
						<label for="floatingSelectGrid">Property Type</label>
					</div>
				</div>
				<div className="mx-1 col-md-2 row">
					<button className="btn btn-primary">Search</button>
				</div>
			</form>

			<Properties data={newData} />
		</div>
	);
};

export default Filter;
