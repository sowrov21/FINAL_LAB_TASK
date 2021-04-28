import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-primary">
			<a className="navbar-brand" exact to="#">
				Diary App
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" exact to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" exact to="/add">
							Add New
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" exact to="/view">
							View
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link " exact to="/about">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
