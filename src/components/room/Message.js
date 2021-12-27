import React, { useState, useEffect } from 'react';
import { messagesQuery, onSnapshot } from '../firebase/Firestore';
import BubbleChat from './BubbleChat';

//Styling
import { Box } from '@mui/material';

const Message = () => {
	const [messages, setMessages] = useState([]);

	// Subscribe to  messages updates
	useEffect(() => {
		// Define an array
		let messagesData = [];
		const update = onSnapshot(messagesQuery, (snapshot) => {
			snapshot.docChanges().forEach((change) => {
				// check if its a new message or an update
				if (change.type === 'added') {
					messagesData.push(change.doc.data());
				}
				if (change.type === 'removed') {
					setMessages(
						messagesData.filter(
							(message) => message.uid !== change.doc.data().uid,
						),
					);
				}
			});

			setMessages(
				[...messagesData]
					.sort((a, b) => {
						return a.createdAt - b.createdAt;
					})
					.slice(-10, messagesData.length),
			);
		});

		// Unsubscribe from messages updates
		return () => {
			update();
		};
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '.5rem',
			}}
		>
			{messages.map((message) => (
				<BubbleChat
					key={`${message.text}-${message.createdAt}`}
					message={message}
				/>
			))}
		</Box>
	);
};

export default Message;
