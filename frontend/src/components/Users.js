import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SortUsers } from './SortUsers';
import { UsersTable } from './UsersTable';
import { CreateUsers } from './CreateUsers';

/**
 * Componenet that gets all users from api and passes the data to the user table, sort users functions, and create user function
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

	/**
	 * Update previous users array with new users array
	 * @param {array} newList copy of users array that is manipulated and used to overwrite the existing users array
	 */
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
