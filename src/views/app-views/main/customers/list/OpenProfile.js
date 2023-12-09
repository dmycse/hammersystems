import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';


const ProfileOption = ({customer}) => {
	return (
		<Menu mode="inline">
			<Menu.Item >
				<UserOutlined />
				<span>{customer.name}</span>
			</Menu.Item>
		</Menu>
	);
};


function OpenProfile ({customer, closeProfile}) {
	
		return (
			<InnerAppLayout 
				sideContentWidth={320}
				sideContent={<ProfileOption customer={customer}/>}
				mainContent={<EditProfile customer={customer} closeProfile={closeProfile}/>}
			/>
    );
}

export default OpenProfile;