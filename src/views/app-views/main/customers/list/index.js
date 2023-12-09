import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {getData, removeData} from 'redux/actions/Customers';

import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

import OpenProfile from './OpenProfile';
import AvatarStatus from 'components/shared-components/AvatarStatus';


function CustomerList() {

	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData())
	}, [])

	let customersData = useSelector(state => state.customers);
	
	let [customerProfileVisible, setCustomerProfileVisible] = useState(false);
	let [selectedCustomer, setSelectedCustomer] = useState(null);

	
	let removeCustomer = customerId => {
		dispatch(removeData(customerId));
		message.success({ content: `Deleted customer ${customerId}`, duration: 2 });
	};

	let showCustomerProfile = customerInfo => {
		setCustomerProfileVisible(!customerProfileVisible);
		setSelectedCustomer(customerInfo);
	};

	let closeCustomerProfile = () => {
		setCustomerProfileVisible(!customerProfileVisible);
		setSelectedCustomer(null);
  };

	const tableColumns = [
		{
			title: 'ФИО',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus src={record.img} name={record.name} />
				</div>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.split(' ').at(1).toLowerCase();
					b = b.name.split(' ').at(1).toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Телефон',
			dataIndex: 'phone',
		},
		{
			title: 'Электронный адрес',
			dataIndex: 'email',
		},
		{
			title: 'Город',
			dataIndex: 'address',
			render:  (_, record) => (
				<span>{record.address.city}</span>
			),
			sorter: {
				compare: (a, b) => {
					a = a.address.city.toLowerCase();
					b = b.address.city.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				}
			}
		},
		{
			title: 'Компания',
			dataIndex: 'company',
			render:  (_, record) => (
				<span>{record.company.name}</span>
			),
			sorter: {
				compare: (a, b) => {
					a = a.address.city.toLowerCase();
					b = b.address.city.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				}
			}
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, record) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showCustomerProfile(record)}} size="small"/>
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={()=> {removeCustomer(record.id)}} size="small"/>
					</Tooltip>
				</div>
			)
		}
	];

	return (
		<>
			{
				Array.isArray(customersData) &&
					<Card bodyStyle={{'padding': '0px'}}>
						{!customerProfileVisible
							? <Table columns={tableColumns} dataSource={customersData} rowKey='id' />
							: <OpenProfile customer={selectedCustomer} closeProfile={closeCustomerProfile} />
						}
					</Card>
			}
		</>	
	)
}

export default CustomerList;