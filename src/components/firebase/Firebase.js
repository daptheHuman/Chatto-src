// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	collection,
	query,
	orderBy,
	limit,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Messages Query
const messagesQuery = query(
	collection(db, 'messages'),
	orderBy('createdAt', 'desc'),
	limit(10),
);

export default class Authentication {
	constructor() {
		this.provider = new GoogleAuthProvider();
		this.auth = getAuth();
	}

	async signInUser() {
		try {
			await signInWithPopup(this.auth, this.provider);

			return true;
		} catch (err) {
			console.error('Error: ', err);
			return false;
		}
	}

	async signOutUser() {
		try {
			await signOut(this.auth, this.provider);

			return false;
		} catch (err) {
			console.error('Error: ', err);
			return true;
		}
	}

	getUser() {
		return this.auth.currentUser;
	}

	getAuthSnapshot() {
		onAuthStateChanged(this.auth, (user) => {
			return user;
		});
	}
}

const handleSignIn = async (auth) => {
	try {
		return await auth.signInUser();
	} catch (err) {
		console.error('Error: ', err);
	}
};

const handleSignOut = async (auth) => {
	try {
		return await auth.signOutUser();
	} catch (err) {
		console.error('Error: ', err);
	}
};

const Auth = new Authentication();

export { db, messagesQuery, Auth, handleSignIn, handleSignOut };
