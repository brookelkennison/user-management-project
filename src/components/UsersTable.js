import React from 'react';

/**
 * Displays user data in the form of a table
 * @component
 * @param {object} data contains user data
 */
export const UsersTable = (data) => {
	const users = data.users;

	/**
	 * Creates google maps link by passing in address values as params
	 * @function
	 * @param {object} address
	 */
	const getAddressLink = (address) => {
		const link = 'https://www.google.com/maps/place/' + address.street + ' ' + address.city + ' ' + address.zipcode;
		return link;
	};

	return (
		<>
			<div className='overflow-x-auto relative'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='py-3 px-4'>
								ID
							</th>
							<th scope='col' className='py-3 px-6'>
								Name
							</th>
							<th scope='col' className='py-3 px-6'>
								Address
							</th>
							<th scope='col' className='py-3 px-6'>
								Contact
							</th>
							<th scope='col' className='py-3 px-6'>
								Company
							</th>
						</tr>
					</thead>
					<tbody>
						<>
							{users.map((user) => (
								<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={user.id}>
									<td className='py-3 px-4'>{user.id}</td>
									<th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										{user.name}
									</th>
									<td className='py-4 px-6'>
										<a href={getAddressLink(user.address)} target='_blank' rel='noreferrer'>
											{user.address.street}
										</a>
									</td>
									<td className='py-4 px-6'>{user.email}</td>
									<td className='py-4 px-6'>{user.company.name}</td>
								</tr>
							))}
						</>
					</tbody>
				</table>
			</div>
		</>
	);
};
