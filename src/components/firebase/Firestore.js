import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db, messagesQuery } from './Firebase';

const addMessage = async (message, user) => {
	const { displayName, uid, photoURL } = user;

	await addDoc(collection(db, 'messages'), {
		text: message,
		createdAt: new Date(),
		displayName: displayName,
		uid: uid,
		photoURL: photoURL,
	});
};

export { addMessage, messagesQuery, onSnapshot };
