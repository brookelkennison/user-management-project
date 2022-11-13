import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SortUsers } from './SortUsers';
import { UsersTable } from './UsersTable';
import { CreateUsers } from './CreateUsers';
import ReactLoading from 'react-loading';

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
	const [loading, setLoading] = useState(true);

	const getUserList = () => {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
			setUsers(response.data);
		});
	};

	const updateUsers = (newList) => {
		setUsers(newList);
	};

	useEffect(() => {
		getUserList();
	}, []);

	useEffect(() => {
		users.length > 0 &&
			setTimeout(() => {
				setLoading(false);
			}, 500);
	}, [users]);

	return (
		<>
			{loading ? (
				<ReactLoading type={'spin'} color={'black'} height={36} width={36} />
			) : (
				<>
					<SortUsers users={users} updateUsers={updateUsers} />
					<UsersTable users={users} />
					<CreateUsers users={users} updateUsers={updateUsers} />
				</>
			)}
		</>
	);
};
