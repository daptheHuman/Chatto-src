import React from 'react';
import { Auth } from '../firebase/Firebase';

function ChatMessage(props) {
	const { text, uid } = props.message;
	const userId = Auth.getUser().uid;
	const photoProfile = Auth.getUser().photoURL;
	return (
		<div>
			<div className={uid === userId ? 'sent' : 'received'}>
				<img src={photoProfile} alt="profile" />
				<p>{text}</p>
			</div>
		</div>
	);
}

export default ChatMessage;
