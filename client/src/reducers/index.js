import { combineReducers } from 'redux';

import posts from './Posts';
import auth from './auth';

export const reducers = combineReducers({
     posts ,
     auth

    });
