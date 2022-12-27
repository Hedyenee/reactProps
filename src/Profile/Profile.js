import React from 'react';
import './Profile.css';

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div className='profile'>
      <img src={props.children} alt={fullName}  className="photo"/>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

export default Profile;
