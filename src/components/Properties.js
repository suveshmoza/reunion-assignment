import React from 'react';

const Properties = ({ data }) => {
	return (
		<div className="mt-4">
			<div className="row g-3">
				{data.map((d) => (
					<div key={d.id} className="col-md-4">
						<div className="card" style={{ width: '18rem' }}>
							<img
								src="https://media.istockphoto.com/photos/real-estate-agent-offers-a-sample-home-insurance-home-to-sign-the-picture-id1355972382?b=1&k=20&m=1355972382&s=170667a&w=0&h=xNwBxkPT05udtVI-NA8r0Uq5T0jPqRnqNj02Eixq2D4="
								className="card-img-top"
								alt="property"
							/>
							<div className="card-body">
								<div className="card-title d-flex justify-content-between">
									<div>
										<span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
											₹{d.rent}
										</span>
										<small style={{ color: 'gray' }}>/month</small>
									</div>
									<div>
										<i className="fa-2x fa-regular fa-heart"></i>
									</div>
								</div>
								<div className="card-text">
									<h4>
										<strong>{d.state}</strong>
									</h4>
									<p style={{ color: 'gray' }}>{d.streetAddress}</p>
								</div>
								<hr />
								<div className="d-flex justify-content-between align-items-center">
									<p>
										<i className="fa-solid fa-bed"> </i>
										<small>{d.beds} Beds</small>
									</p>
									<p>
										<i className="fa-solid fa-bath"> </i>
										<small>{d.bathroom} Bathrooms</small>
									</p>
									<p>
										<i className="fa-regular fa-square"> </i>
										<small>{d.area}m^2</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Properties;
