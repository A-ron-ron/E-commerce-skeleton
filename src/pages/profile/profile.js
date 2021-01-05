import React, { useContext } from 'react';
import { Context } from '../../Context'

function Profile(props) {

  const { setUserData, userData } = useContext(Context)

  return (
    <div>
      <h2>Hello {userData.name}</h2>
      <p>would you like to sign-out?</p>
      <button onClick={() => setUserData([])}>Sign Out</button>
      
    </div>
)
}

export default Profile;