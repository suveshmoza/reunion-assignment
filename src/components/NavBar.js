import React from 'react';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container container-fluid">
				<a className="navbar-brand" href="#">
					<i class="fa-solid fa-house" style={{ color: '#003EFF' }}></i>
					Real Estate
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link " aria-current="page" href="#">
								Rent
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Buy
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Sell
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Manage Property
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<div className="d-flex">
						<button className="btn btn-outline-secondary mx-1">Log in</button>
						<button className="btn btn-primary mx-1">Sign up</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
