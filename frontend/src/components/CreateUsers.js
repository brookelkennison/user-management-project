import React, { useState } from 'react';

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
 * @param {function} updateUsers
 * @returns {any}
 */

export const CreateUsers = ({ users, updateUsers }) => {
	const usersArray = [...users];
	const [modal, setModal] = useState(false);
	const [formValidated, setFormValidated] = useState(false);
	const newUser = {
		id: users.length + 1,
		name: undefined,
		email: undefined,
		address: {
			street: undefined,
			city: undefined,
			zipcode: undefined,
		},
		company: {
			name: undefined,
		},
	};

	const handleChange = (event, key, nestedKey) => {
		if (nestedKey !== undefined) {
			newUser[key][nestedKey] = event.target.value;
		} else {
			newUser[key] = event.target.value;
		}
		validateForm();
	};

	const validateForm = () => {
		let allValues = [];
		Object.keys(newUser).forEach((key) => {
			if (key === 'address' || key === 'company') {
				allValues = allValues.concat(Object.values(newUser[key]));
			} else {
				allValues = allValues.concat(newUser[key]);
			}
		});
		const checkValues = allValues.every((element) => element !== undefined);
		if (checkValues === true) {
			setFormValidated(true);
		}
	};

	const handleSubmit = () => {
		usersArray[usersArray.length] = newUser;
		updateUsers(usersArray);
		setFormValidated(false);
		setModal(false);
	};

	return (
		<>
			{modal && (
				<div className='py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0' id='modal'>
					<div role='alert' className='container mx-auto w-11/12 md:w-2/3 max-w-lg'>
						<div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
							<h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>Create New User</h1>
							{/* NAME */}
							<label htmlFor='name' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
								Full Name
							</label>
							<input
								id='name'
								className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='James'
								required
								onChange={(e) => {
									handleChange(e, 'name');
								}}
							/>
							{/* EMAIL */}
							<label htmlFor='email' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
								Email
							</label>
							<input
								id='email'
								className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='name@example.com'
								onChange={(e) => {
									handleChange(e, 'email');
								}}
							/>
							{/* STREET ADDRESS */}
							<label htmlFor='street' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
								Street Address
							</label>
							<input
								id='street'
								className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='123 Example St.'
								required
								onChange={(e) => {
									handleChange(e, 'address', 'street');
								}}
							/>
							{/* CITY */}
							<label htmlFor='city' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
								City
							</label>
							<input
								id='city'
								className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='Dallas'
								required
								onChange={(e) => {
									handleChange(e, 'address', 'city');
								}}
							/>
							{/* ZIPCODE */}
							<label htmlFor='zipcode' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
								Zipcode
							</label>
							<input
								id='zipcode'
								className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='45670'
								required
								onChange={(e) => {
									handleChange(e, 'address', 'zipcode');
								}}
							/>
							{/* COMPANY */}
							<label htmlFor='company' className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
								Company
							</label>
							<input
								id='company'
								className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='My Company'
								required
								onChange={(e) => {
									handleChange(e, 'company', 'name');
								}}
							/>

							<div className='flex items-center justify-start w-full'>
								<button
									className={'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out  rounded text-white px-8 py-2 text-sm ' + (formValidated ? 'hover:bg-indigo-600 bg-indigo-700' : 'bg-indigo-700/40')}
									disabled={!formValidated}
									onClick={() => {
										handleSubmit();
									}}>
									Submit
								</button>
								<button
									className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
									onClick={() => {
										setModal(false);
										setFormValidated(false);
									}}>
									Cancel
								</button>
							</div>
							<button
								className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
								onClick={() => {
									setModal(false);
									setFormValidated(false);
								}}
								aria-label='close modal'>
								<svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-x' width='20' height='20' viewBox='0 0 24 24' strokeWidth='2.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
									<path stroke='none' d='M0 0h24v24H0z' />
									<line x1='18' y1='6' x2='6' y2='18' />
									<line x1='6' y1='6' x2='18' y2='18' />
								</svg>
							</button>
						</div>
					</div>
				</div>
			)}
			<div className='w-full flex justify-center py-12' id='button'>
				<button
					className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm'
					onClick={() => {
						setModal(true);
					}}>
					Create User
				</button>
			</div>
		</>
	);
};
