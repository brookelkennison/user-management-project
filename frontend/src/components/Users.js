import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SortUsers } from './SortUsers';
import { UsersTable } from './UsersTable';


export const Users = () => {
    const [users, setUsers] = useState([]);
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
        
    }, [users]);

    return (
        <>
            {users.length > 0 && (
                <>
                <SortUsers users={users} updateUsers={updateUsers}/>
                <UsersTable users={users}/>
                </>
            )} 

        </>
    )
}