import {loginPending, loginSuccess, loginFailed } from '../reducers/loggedIn.slice';

import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc ,updateDoc,onSnapshot,Timestamp} from 'firebase/firestore';
import { db, fb, auth, storage } from '../../config/firebase';

  
    export const login = (email,password) => async (dispatch) => {
            dispatch(loginPending());
            // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
            console.log('hi')
            const q =  query(collection(db,'Candidates'), where("email", "==", `${email}`))
            console.log(q)

            /*dispatch(loginSuccess(q));*/
            
           getDocs(q)
            .then((snapshot) => {
                let jobsArray = []
                snapshot.docs.forEach((doc) =>{ (jobsArray.push({ ...doc.data(),id:doc.id })) });
                console.log('userDetails are:-, ', jobsArray[0]);
                dispatch(loginSuccess(jobsArray[0]));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(loginFailed({ errorMessage }));
        });
    
};