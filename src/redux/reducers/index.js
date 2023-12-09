import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Customers from './Customers';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
		customers: Customers
});

export default reducers;