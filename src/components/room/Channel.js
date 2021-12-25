import React, { useState } from 'react';
import Message from './Message';
import { addMessage } from '../firebase/Firestore';

const Channel = (props) => {
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
		<div>
			<h1>Welcome to Chatto</h1>

			<div>
				<Message />
				<input
					type="text"
					value={message}
					onChange={(e) => changeHandler(e)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							sendMessage();
						}
					}}
				/>
				<button onClick={sendMessage}>Send</button>
			</div>
		</div>
	);
};

export default Channel;
