import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, username, email, id}=props.friend;
    const navigate=useNavigate();
    const details=()=>{
        navigate(`/friends/${id}`);
    }
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <h4>Username: {username}</h4>
            <h4>Email: {email}</h4>
            <button onClick={details}>Details</button>
        </div>
    );
};

export default Friend;