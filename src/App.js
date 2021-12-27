import { React, useState } from 'react';
import Nav from './components/Navbar';
import Channel from './components/room/Channel';
import { SignInButton } from './components/firebase/handler/Authentication';
import { Auth } from './components/firebase/Firebase';

import { Box, Paper } from '@mui/material';
import { theme, ThemeProvider } from './components/Theming';

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
		<ThemeProvider theme={theme}>
			<Paper
				sx={{
					bgcolor: 'primary.bg',
					minHeight: '100vh',
					boxSizing: 'border-box',
				}}
			>
				{user ? (
					<Box>
						<Nav auth={Auth} currentUser={user} changeState={changeState} />
						<Channel theme={theme} currentUser={user} />
					</Box>
				) : (
					<Box>
						<Nav auth={Auth} currentUser={user} changeState={changeState} />

						<SignInButton changeState={changeState} auth={Auth} />
					</Box>
				)}
			</Paper>
		</ThemeProvider>
	);
};

export default App;
