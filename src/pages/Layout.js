import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<div className="header">
				<img
					className="logo bbc-logo"
					src="bbc-ws-black.png"
					alt="BBC World Service logo"
				></img>
				<img
					className="logo braille-logo"
					src="logo-white.png"
					alt="Fact logo"
				></img>
				<h1>
					Point<span>.</span>
				</h1>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Main</Link>
					</li>
					<li>
						<Link to="/Info">Info</Link>
					</li>
					<li>
						<Link to="https://github.com/Louis-Matsika/475">GitHub</Link>
					</li>
					<li>
						<Link to="https://bbcnews.bbcstudios.com/platforms/bbc-world-service/">
							BBC World Service
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
