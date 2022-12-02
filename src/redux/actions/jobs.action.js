import {fetchAllJobsPending, fetchAllJobsSuccess, fetchAllJobsFailed } from '../reducers/jobs.slice';
import {fetchJobPending, fetchJobSuccess, fetchJobFailed, } from '../reducers/singleJob.slice';
import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc ,updateDoc,onSnapshot,Timestamp} from 'firebase/firestore';
import { db, fb, auth, storage } from '../../config/firebase';

  
    export const fetchAllJobs = (uid) => async (dispatch) => {
            dispatch(fetchAllJobsPending());
            // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
            getDocs(collection(db,'Jobs'))
            .then((snapshot) => {
                let jobsArray = []
                snapshot.docs.forEach((doc) =>{ (jobsArray.push({ ...doc.data(),id:doc.id })) });
                console.log('jobs no exception:-, ', jobsArray);
                dispatch(fetchAllJobsSuccess(jobsArray));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(fetchAllJobsFailed({ errorMessage }));
        });
    
};



export const fetchJob = (id) => async (dispatch) => {
        dispatch(fetchJobPending());
        // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
        getDoc(doc(db,'Jobs',id))
        .then((doc) => {
            let specificJob
            specificJob = doc.data()
            console.log('the job is:-, ', specificJob);
            dispatch(fetchJobSuccess(specificJob));
    }).catch((error) => {
            var errorMessage = error.message;
            console.log('Error fetching profile', errorMessage);
            dispatch(fetchJobFailed({ errorMessage }));
    });

};