import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SortUsers } from './SortUsers';
import { UsersTable } from './UsersTable';
import { CreateUsers } from './CreateUsers';
import ReactLoading from 'react-loading';

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const sorting = {
    //     alphabetical: function sortAlphabetical(users) {
            
    //     }
    // }
    // on click of sort method use the users array and set the user array with the new data
    
    const getUserList = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            setUsers(response.data);
        });
    }

    
    const updateUsers = (newList) => {
        setUsers(newList);
    }
    
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
            {loading ? 
                <ReactLoading type={'spin'} color={'black'} height={36} width={36} /> : (
                <>
                <SortUsers users={users} updateUsers={updateUsers}/>
                <UsersTable users={users}/>
                <CreateUsers />
                </>
            )} 

        </>
    )
}