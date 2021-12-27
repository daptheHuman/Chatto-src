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
	const id = props.currentUser.uid;

	const sendMessage = async (e) => {
		if (message.length > 0 && id) {
			try {
				await addMessage(message, id);
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
						borderRadius: '50px',
						justifyContent: 'space-between',
						alignItems: 'stretch',
						padding: '0px',
					}}
				>
					<Input
						sx={{ mx: 2, flex: '1 1 2' }}
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
					/>

					<Button
						sx={{
							borderRadius: '50%',
							m: 1,
							p: 1,
							flex: '0 1 1',
						}}
						variant="contained"
						color="accent"
						onClick={sendMessage}
					>
						<ArrowForwardIosIcon fontSize="small" color="white" />
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</ThemeProvider>
	);
};

<Toolbar />;
export default Channel;
