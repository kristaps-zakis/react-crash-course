import { useEffect, useState } from 'react';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const getProfileData = async () => {
      const response = await fetch('http://localhost:3001/profile');
      const data = await response.json();
      setFirstName(data.firstName);
      setLastName(data.lastName);
    };

    getProfileData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default Profile;
