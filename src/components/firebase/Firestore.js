import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db, messagesQuery } from './Firebase';

const addMessage = async (message, id) => {
	await addDoc(collection(db, 'messages'), {
		text: message,
		createdAt: new Date(),
		uid: id,
	});
};

export { addMessage, messagesQuery, onSnapshot };
