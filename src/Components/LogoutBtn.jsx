import React from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function RegisterView() {
  const history = useHistory();

  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then((data) => {
        console.log(data);
        console.log("Sign-out successful.");

        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={handleLogout}>Sign Out</button>;
}

export default RegisterView;
