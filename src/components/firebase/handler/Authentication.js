import React from 'react';
import { handleSignIn, handleSignOut } from '../Firebase';
import GoogleButton from 'react-google-button';

import { Button } from 'react-bootstrap';

const SignInButton = (props) => {
	const { auth, changeState } = props;
	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleSignIn(auth);

		changeState(auth.getUser());
	};
	return <GoogleButton onClick={handleSubmit} />;
};

const SignOutButton = (props) => {
	const { auth, changeState } = props;
	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleSignOut(auth);

		changeState(auth.getUser());
	};
	return <Button onClick={handleSubmit}>Sign Out</Button>;
};

export { SignInButton, SignOutButton };
