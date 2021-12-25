import { SignOutButton } from './firebase/handler/Authentication';

const Navbar = (props) => {
	const { changeState, auth, currentUser } = props;

	return (
		<div>
			<nav>
				<div className="nav-wrapper">
					<h2>Chatto</h2>
					<ul className="right">
						{currentUser && (
							<div>
								<p>Hello, {currentUser.displayName}</p>
								<div>
									<SignOutButton changeState={changeState} auth={auth} />
								</div>
							</div>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
