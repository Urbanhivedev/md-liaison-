import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from './storage';
import thunk from 'redux-thunk';

import candidatesReducer from './reducers/candidates.slice';
import jobsReducer from './reducers/jobs.slice';
import singleJobReducer from './reducers/singleJob.slice';
import companiesReducer from './reducers/companies.slice';

const reducers = combineReducers({
candidates:candidatesReducer,
jobs:jobsReducer,
singleJob:singleJobReducer,
companies:companiesReducer,
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
