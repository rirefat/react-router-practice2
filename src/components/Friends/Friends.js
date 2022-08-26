import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from '../Friend/Friend';

const Friends = () => {
const [friends, setFriends]=useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
},[]);
    return (
        <div className='main'>
            <h1>All friends</h1>
            <h3>Available Friends: {friends.length}</h3>
            <div className="friends-container ">
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;