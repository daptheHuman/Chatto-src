import React from 'react';
import { Auth } from '../firebase/Firebase';

//Styling
import {
	List,
	Avatar,
	Typography,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
	sent: {
		// alignSelf: 'flex-end',
		// alignItems: 'center',
		// width: '100',
	},
	received: {
		alignSelf: 'flex-start',
		alignItems: 'center',
	},
}));

const BubbleChat = (props) => {
	const { text, uid } = props.message;
	const userId = Auth.getUser().uid;
	const photoProfile = Auth.getUser().photoURL;
	const isSent = uid === userId;

	const classes = useStyles();

	return (
		<List
			disablePadding={true}
			className={isSent ? classes.sent : classes.received}
		>
			<ListItem
				divider={true}
				// set bg color to primary.bg as default
				sx={
					isSent
						? {
								flexDirection: 'row-reverse',
						  }
						: {
								flexDirection: 'row',
						  }
				}
			>
				<ListItemAvatar>
					<Avatar src={photoProfile} alt="profile" />
				</ListItemAvatar>
				<ListItemText
					sx={{ mx: 2 }}
					primary={
						<Typography variant="body1" align={isSent ? 'right' : 'left'}>
							{text}
						</Typography>
					}
				></ListItemText>
			</ListItem>
			<Divider
				variant="middle"
				component="li"
				sx={{ bgcolor: 'accent.main' }}
			/>
		</List>
	);
};

export default BubbleChat;
