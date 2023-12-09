import axios from 'axios';

import {
  GET_CUSTOMERS_LIST,
  CHANGE_CUSTOMER_DATA,
  REMOVE_CUSTOMER
} from '../constants/Customers';

let url = 'https://jsonplaceholder.typicode.com/users'

export const getData = () => {
  return async dispatch => {
		try {
			let {data} = await axios.get(url);
	
			dispatch({
				type: GET_CUSTOMERS_LIST,
				payload: data
			});

		} catch (error) {
				console.log(error)
		}
	}
};

export const changeData = (customer) => {
  return {
    type: CHANGE_CUSTOMER_DATA,
    payload: customer
  }
};

export const removeData = (id) => {
  return {
    type: REMOVE_CUSTOMER,
		payload: id
  };
};