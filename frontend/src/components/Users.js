import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const getUserList = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            setUsers(response.data);
        });
    }

    useEffect(() => {
        getUserList();
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <>
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Contact
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Company
                        </th>
                    </tr>
                </thead>
                    <tbody>
                    {users.length > 0 && (
                        <>
                        {users.map(user => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name}
                                </th>
                                <td className="py-4 px-6">
                                    {user.address.city}
                                </td>
                                <td className="py-4 px-6">
                                    {user.email}
                                </td>
                                <td className="py-4 px-6">
                                    {user.company.name}
                                </td>
                            </tr>
                        ))}
                        </>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}