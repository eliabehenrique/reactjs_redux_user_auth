import { combineReducers } from 'redux';

import newUser from "../SignUp/shared/reducer";
import user from "../User/shared/reducers";
import login from "../Login/shared/reducers";


export default combineReducers({
    login
});