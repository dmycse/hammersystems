import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {changeData} from 'redux/actions/Customers';

import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import customersImg from "assets/data/customers-avatars.data.json";

let avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';


function EditProfile ({customer, closeProfile}) {

	let {name, img, email, username, phone, website, address, company} = customer;

	let dispatch = useDispatch();

	let [avatarUrl, setAvatarUrl] = useState(img);

	let getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	const onFinish = values => {
		const key = 'updatable';
		message.loading({ content: 'Сохранение данных...', key });
		
		let customerNewData = {...customer,
			name: values.name,
			email: values.email,
			userName: values.userName,
			phoneNumber: values.phoneNumber,
			website: values.website
		};
		customerNewData.company.name = values.company;
		customerNewData.address.street = values.address;
		customerNewData.address.city = values.city;
		customerNewData.address.postcode = values.postcode;
		
		setTimeout(() => {
			dispatch(changeData(customerNewData));
			message.success({ content: 'Данные сохранены!', key, duration: 2 });
			closeProfile();
		}, 1000);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const onUploadAavater = info => {
		const key = 'updatable';
		if (info.file.status === 'uploading') {
			message.loading({ content: 'Uploading...', key, duration: 1000 });
			return;
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, imageUrl => setAvatarUrl(imageUrl));
			message.success({ content: 'Uploaded!', key,  duration: 1.5 });
		}
	};

	const onRemoveAvater = () => {
		setAvatarUrl('');
	};


	return (
		<>
			<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
				<Avatar size={90} src={avatarUrl} icon={<UserOutlined />}/>
				<div className="ml-md-3 mt-md-0 mt-3">
					<Upload onChange={onUploadAavater} showUploadList={false} action={avatarEndpoint}>
						<Button type="primary">Сменить аватар</Button>
					</Upload>
					<Button className="ml-2" onClick={onRemoveAvater}>Удалить аватар</Button>
				</div>
			</Flex>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={
						{ 
							'name': name,
							'email': email,
							'username': username,
							'company': company.name,
							'phoneNumber': phone,
							'website': website,
							'address': ` ${address.street}, ${address.suite}`,
							'city': address.city,
							'postcode': address.zipcode
						}
					}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="ФИО"
										name="name"
										rules={[
											{
												required: true,
												message: 'Фамилия и имя!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Имя пользователя"
										name="username"
										rules={[
											{
												required: true,
												message: 'Please input your username!'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Электронный адрес"
										name="email"
										rules={[{ 
											required: true,
											type: 'email',
											message: 'Please enter a valid email!' 
										}]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Компания"
										name="company"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Телефон"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Вебсайт"
										name="website"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Form.Item
										label="Адрес"
										name="address"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Город"
										name="city"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Индекс"
										name="postcode"
									>
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Сохранить
							</Button>
							<Button className="ml-4" onClick={closeProfile}>
								Закрыть
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	)
}

export default EditProfile;
