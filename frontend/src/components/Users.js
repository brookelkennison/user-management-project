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
    }, [])

    useEffect(() => {
        console.log(users);
    }, [users])
}