import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from './storage';
import thunk from 'redux-thunk';

import candidatesReducer from './reducers/candidates.slice';
import jobsReducer from './reducers/jobs.slice';
import applyReducer from './reducers/apply.slice';
import singleJobReducer from './reducers/singleJob.slice';
import companiesReducer from './reducers/companies.slice';
import loggedInReducer from './reducers/loggedIn.slice';

const reducers = combineReducers({
candidates:candidatesReducer,
jobs:jobsReducer,
apply:applyReducer,
singleJob:singleJobReducer,
companies:companiesReducer,
loggedIn:loggedInReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
