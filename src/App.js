import { React, useState } from 'react';
import Navbar from './components/Navbar';
import Channel from './components/room/Channel';
import { SignInButton } from './components/firebase/handler/Authentication';

import { Auth } from './components/firebase/Firebase';
const App = () => {
	const [user, setUser] = useState(Auth.getUser());

	const changeState = (user) => {
		if (user) {
			setUser(user);
		} else {
			setUser(null);
		}
	};

	return (
		<div className="App">
			{user ? (
				<div>
					<Navbar auth={Auth} currentUser={user} changeState={changeState} />
					<Channel currentUser={user} />
				</div>
			) : (
				<div>
					<Navbar auth={Auth} currentUser={user} changeState={changeState} />
					<div>
						<SignInButton changeState={changeState} auth={Auth} />
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
