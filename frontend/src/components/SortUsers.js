import React, { useState } from 'react';

/**
 * Contains functions to sort users by different sort types
 * @param {object} users
 * @param {function} updateUsers function from parent
 * @returns users
 */
export const SortUsers = ({ users, updateUsers }) => {
	const [dropdown, setDropdown] = useState(false);
	const sortBy = (sortType) => {
		const usersArray = [...users];
		// ascending is default
		if (sortType === 'alphabetical') {
			const sortedUsers = usersArray.sort((a, b) => {
				let fa = a.name.toLowerCase(),
					fb = b.name.toLowerCase();
				if (fa < fb) {
					return -1;
				}
				if (fa > fb) {
					return 1;
				}
				return 0;
			});
			updateUsers(sortedUsers);
			setDropdown(false);
		} else if (sortType === 'descending') {
			const sortedUsers = usersArray.sort((a, b) => {
				let fa = a.id,
					fb = b.id;
				if (fa < fb) {
					return 1;
				}
				if (fa > fb) {
					return -1;
				}
				return 0;
			});
			updateUsers(sortedUsers);
			setDropdown(false);
		} else {
			const sortedUsers = usersArray.sort((a, b) => {
				let fa = a.id,
					fb = b.id;
				if (fa < fb) {
					return -1;
				}
				if (fa > fb) {
					return 1;
				}
				return 0;
			});
			updateUsers(sortedUsers);
			setDropdown(false);
		}
	};

	return (
		<div className='sortUsers' style={{ alignSelf: 'start' }}>
			<button
				id='dropdownDefault'
				onClick={() => {
					setDropdown(!dropdown);
				}}
				data-dropdown-toggle='dropdown'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				type='button'
				style={{ backgroundColor: dropdown ? 'darkgrey' : 'rgb(29 78 216)' }}>
				Sort Users
				<svg className='ml-2 w-4 h-4' aria-hidden='true' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style={{ transform: dropdown ? 'scaleY(-1)' : 'none' }}>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
				</svg>
			</button>
			{dropdown && (
				<div id='dropdown' className='z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700' data-popper-reference-hidden='' data-popper-escaped='' data-popper-placement='bottom' style={{ position: 'absolute' }}>
					<ul className='py-1 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefault'>
						{/* on click of each option, it will call sortUsers and pass in an enum */}
						<li>
							<p
								className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
								onClick={() => {
									sortBy('alphabetical');
								}}>
								Alphabetical
							</p>
						</li>
						<li>
							<p
								className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
								onClick={() => {
									sortBy('ascending');
								}}>
								Ascending
							</p>
						</li>
						<li>
							<p
								className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
								onClick={() => {
									sortBy('descending');
								}}>
								Descending
							</p>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
