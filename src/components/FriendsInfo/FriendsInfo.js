import React, { useEffect, useState } from 'react';
import './FriendsInfo.css'
import { useParams } from 'react-router-dom';
import avatar from '../../man-avatar-icon-flat-vector-19152370-1.jpg'

const FriendsInfo = () => {
    const params = useParams();
    const [user, setUser]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res=>res.json())
            .then(data=>setUser(data))
    },[]);
    const {name, username, email, phone, website, company}=user;
    return (
        <div>
            <h1>User Details</h1>
            <div className="info">
                <img src={avatar} alt="" />
                <div className="info-container">
                    <p><strong>Name:</strong> {name?name:"Null"}</p>
                    <p><strong>Username:</strong> {username?username:"Null"}</p>
                    <p><strong>Email:</strong> {email?email:"Null"}</p>
                    <p><strong>Phone:</strong> {phone?phone:"Null"}</p>
                    <p><strong>Website:</strong> {website?website:"Null"}</p>
                    {/* Optional Chaining is used here  */}
                    <p><strong>Company:</strong> {company?.name? company.name:"Null"}</p> 
                </div>
            </div>
        </div>
    );
};

export default FriendsInfo;