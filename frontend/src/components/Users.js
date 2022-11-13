import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SortUsers } from './SortUsers';
import { UsersTable } from './UsersTable';
import { CreateUsers } from './CreateUsers';

/**
 * @date 2022-11-12
 * @param {Array.<Users>} users
 * @param {number} users.id
 * @param {string} users.name
 * @param {string} users.address.street
 * @param {string} users.address.city
 * @param {string} users.address.zipcode
 * @param {string} users.email
 * @param {string} users.company.name
 * @returns {any}
 */
export const Users = () => {
	const [users, setUsers] = useState([]);

	const getUserList = () => {
		try {
			axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
				setUsers(response.data);
			});
		} catch (error) {
			console.error('Error: ', error);
		}
	};

	const updateUsers = (newList) => {
		setUsers(newList);
	};

	useEffect(() => {
		getUserList();
	}, []);

	return (
		<>
			<SortUsers users={users} updateUsers={updateUsers} />
			<UsersTable users={users} />
			<CreateUsers users={users} updateUsers={updateUsers} />
		</>
	);
};
