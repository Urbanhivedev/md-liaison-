import {fetchAdminUsersPending, fetchAdminUsersSuccess, fetchAdminUsersFailed, fetchRealTimeAdminUsersSuccess, fetchConnectedAdminUserSuccess,
    initiatePending, initiateSuccess, initiateSuccess2, initiateFailed, clearUser} from '../reducers/adminUser.slice';
  import { db, fb, auth, storage } from '../../config/firebase';
import { sendChat } from './chat.action';
import { result } from 'lodash';
import { clearChat } from 'redux/reducers/chat.slice';
  
    export const fetchAllAdminUsers = (uid) => async (dispatch) => {
            dispatch(fetchAdminUsersPending());
            // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
            db.collection('users')
            .get()
            .then((snapshot) => {
                const adminUsers = snapshot.docs.map((doc) => ({ ...doc.data() }));
                console.log('Users, ', adminUsers);
                dispatch(fetchAdminUsersSuccess(adminUsers));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(fetchAdminUsersFailed({ errorMessage }));
        });
    
};