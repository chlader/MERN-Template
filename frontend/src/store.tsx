import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { blogListReducer } from './reducers/blogReducers'
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
    blogList: blogListReducer,
    userLogin: userLoginReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)));

export default store;