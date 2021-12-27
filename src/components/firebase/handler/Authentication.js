import React, { useState } from 'react';
import { handleSignIn, handleSignOut } from '../Firebase';
import GoogleButton from 'react-google-button';

import { Box, Button } from '@mui/material';

const SignInButton = (props) => {
	const { auth, changeState } = props;
	const [disabled, setDisabled] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisabled(true);
		await handleSignIn(auth);
		setDisabled(false);
		changeState(auth.getUser());
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '50%',
				height: '100vh',
				m: 'auto',
			}}
		>
			<GoogleButton disabled={disabled} onClick={handleSubmit} />
		</Box>
	);
};

const SignOutButton = (props) => {
	const { auth, changeState } = props;
	const [disabled, setDisabled] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setDisabled(true);
		await handleSignOut(auth);
		setDisabled(false);
		changeState(auth.getUser());
	};
	return (
		<Button
			sx={{ ml: 2 }}
			disabled={disabled}
			variant="outlined"
			color="error"
			onClick={handleSubmit}
		>
			Sign Out
		</Button>
	);
};

export { SignInButton, SignOutButton };
