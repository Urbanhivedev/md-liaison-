import {fetchAllJobsPending, fetchAllJobsSuccess, fetchAllJobsFailed } from '../reducers/jobs.slice';
import {fetchJobPending, fetchJobSuccess, fetchJobFailed, } from '../reducers/singleJob.slice';
import {fetchApplyPending, fetchApplySuccess, fetchApplyFailed, } from '../reducers/apply.slice';
import { getFirestore, collection, where , query ,getDocs ,addDoc, deleteDoc ,doc, getDoc ,updateDoc,onSnapshot,Timestamp} from 'firebase/firestore';
import { db, fb, auth, storage } from '../../config/firebase';

  
    export const fetchAllJobs = () => async (dispatch) => {
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

export const applyToJob = (jobId,candidateId,applicant,jobDetails) => async (dispatch) => {
        dispatch(fetchApplyPending());
        // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
        const jobRef = doc(db,'Jobs',jobId)
        candidateRef = doc(db,'Candidates',candidateId)

        getDoc(josRef)
        .then((doc) => {
            let newAppliedList
            newAppliedList = doc.data().applied
            newAppliedList.push(applicant)
            console.log('the applied candidates for this job are:-, ', newAppliedList);

            updateDoc(jobRef, {
                applied:newAppliedList
               })

               dispatch(fetchApplySuccess("Applied!"));
            
    }).catch((error) => {
        var errorMessage = error.message;
        console.log('Error fetching profile', errorMessage);
        dispatch(fetchApplyFailed({ errorMessage }));
});


    getDoc(candidateRef)
    .then((doc) => {
        let appliedJobs
        appliedJobs = doc.data().JobsApplied
        appliedJobs.push(jobDetails)
        console.log('the applied jobs for this candidate are:-, ', appliedJobs);

        updateDoc(candidateId, {
            JobsApplied:appliedJobs
           })

           dispatch(fetchApplySuccess("Applied!"));
        
}).catch((error) => {
        var errorMessage = error.message;
        console.log('Error fetching profile', errorMessage);
        dispatch(fetchApplyFailed({ errorMessage }));
});
    
    
    

};