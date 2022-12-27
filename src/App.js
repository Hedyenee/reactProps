import React from 'react';
import Profile from './Profile/Profile';
import photo from './assets/photo.png'

const App = () => {
  const handleName = (name) => {
    alert(`Hello, ${name}!`);
  };

  const fullName = "Hedyene Mili"
  const bio = "I am a software developer with a passion for building web applications."
  const profession = "Software Developer"

  return (
    <Profile
      fullName={fullName}
      bio={bio}
      profession={profession}
      handleName={handleName}
    >
      {photo}
    </Profile>
  );
};

export default App;
