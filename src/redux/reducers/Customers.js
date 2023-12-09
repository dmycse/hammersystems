import {
	GET_CUSTOMERS_LIST,
	CHANGE_CUSTOMER_DATA,
	REMOVE_CUSTOMER
} from '../constants/Customers';

import customersImg from "assets/data/customers-avatars.data.json";

const initState = {
  customersData: [],
};

const customers = (state = initState, action) => {
	switch (action.type) {
		case GET_CUSTOMERS_LIST:
			let dataWithImg = action.payload.map(customer => (
				{...customer, img: customersImg.find(elem => elem.id === customer.id).img}
			))
			return dataWithImg;
		case CHANGE_CUSTOMER_DATA:
			let filteredCustomersData = state.filter(customer => customer.id !== action.payload.id); 
			return [action.payload, ...filteredCustomersData]
		case REMOVE_CUSTOMER:
			let newState = state.filter(item => item.id !== action.payload)	
			return [...newState]
		default:
			return state;
	}
}

export default customers;