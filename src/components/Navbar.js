import { SignOutButton } from './firebase/handler/Authentication';

import { AppBar, Typography, Box, Toolbar } from '@mui/material';

const Nav = (props) => {
	const { changeState, auth, currentUser } = props;

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Chatto
				</Typography>
				{currentUser && (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							alignContent: 'center',
						}}
					>
						<Typography variant="overline" noWrap={true}>
							Hello, {currentUser.displayName}
						</Typography>

						<SignOutButton changeState={changeState} auth={auth} />
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
