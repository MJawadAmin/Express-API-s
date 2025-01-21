import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const User = () => {
    const [users, setUsers] = useState([{
        Name: "Jawad Amin",
        Email: "jjawadamn883@gmail.com",
        Age: 25,
    }]);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'> Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                    <Link to='/update' className='btn btn-success'> Update</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
