import React, { useState } from 'react';
import Message from './Message';
import { addMessage } from '../firebase/Firestore';

//styling
import { ThemeProvider } from '@mui/styles/';
import { AppBar, Box, Button, Input, Toolbar, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Channel = (props) => {
	const { theme } = props;
	const [message, setMessage] = useState('');
	const user = props.currentUser;

	const sendMessage = async (e) => {
		if (message.length > 0 && user) {
			try {
				await addMessage(message, user);
				setMessage('');
			} catch (err) {
				console.error('Error: ', err);
			}
		} else {
			alert('Please enter a message');
		}
	};

	const changeHandler = (e) => {
		setMessage(e.target.value);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'stretch',
					flexDirection: 'column',
					py: 3,
				}}
			>
				<Typography sx={{ alignSelf: 'center' }} display="inline" variant="h2">
					{'"Welcome to'}
					{
						<div sx={{ display: 'inline' }}>
							<Typography
								sx={{ fontWeight: 'bold' }}
								display="inline"
								variant="h2"
								color="accent.main"
							>
								Chatto
							</Typography>
							<Typography display="inline" variant="h2" color="white">
								{'"'}
							</Typography>
						</div>
					}
				</Typography>

				<Message />
				<Box sx={{ alignSelf: 'center' }}></Box>
			</Box>
			<AppBar position="fixed" sx={{ p: 1, bottom: 0, top: 'auto' }}>
				<Toolbar
					sx={{
						bgcolor: 'secondary.bg',
						borderRadius: '1rem',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '0px',
					}}
				>
					<Input
						sx={{ mx: 2, flex: '2 0 2' }}
						variant="standard"
						size="small"
						autoFocus={true}
						maxRows={4}
						multiline
						fullWidth
						color="accent"
						placeholder="Message"
						value={message}
						onChange={(e) => changeHandler(e)}
						// when pressing SHIFT + ENTER to make new line and when only press ENTER to sendMessage
						onKeyDown={(e) => {
							if (e.keyCode === 13 && e.shiftKey) {
								e.preventDefault();
								setMessage(message + '\n');
							} else if (e.keyCode === 13) {
								e.preventDefault();
								sendMessage();
							}
						}}
					/>

					<Button
						sx={{
							borderRadius: '1rem',
							mx: 1,
							p: 1,
							flex: '0 2 auto',
						}}
						variant="contained"
						color="accent"
						onClick={sendMessage}
					>
						<ArrowForwardIosIcon fontSize="small" color="red" />
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</ThemeProvider>
	);
};

<Toolbar />;
export default Channel;
