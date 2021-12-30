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
} from '@mui/material';

const BubbleChat = (props) => {
	const { text, displayName, uid, photoURL } = props.message;
	const userId = Auth.getUser().uid;
	const isSent = uid === userId;

	return (
		<List disablePadding={true}>
			<ListItem
				alignItems="flex-start"
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
					<Avatar referrerPolicy="no-referrer" src={photoURL} alt="profile" />
				</ListItemAvatar>
				<ListItemText
					sx={{
						mx: 2,
						my: 0,
						px: 1,

						// if isSent true set the border radius to 0
						// else set the border radius to 0
						borderRadius: isSent
							? '.5rem .5rem 0 .5rem'
							: '.5rem .5rem .5rem 0',
						bgcolor: isSent ? '#B0283B' : '#ED4C61',
						flex: '0 0 auto',
					}}
					primary={
						<Typography
							variant="caption"
							display="block"
							align={isSent ? 'right' : 'left'}
						>
							{displayName}
						</Typography>
					}
					secondary={
						<Typography
							whiteSpace="pre-line"
							display="inline"
							variant="body1"
							align={isSent ? 'right' : 'left'}
						>
							{text}
						</Typography>
					}
				></ListItemText>
			</ListItem>
		</List>
	);
};

export default BubbleChat;
