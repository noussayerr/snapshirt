import React from 'react'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
function Profile() {
    const { logout } = useKindeAuth();
  return (
    <div>
        <button onClick={logout} type="button">Sign out</button>
    </div>
  )
}

export default Profile