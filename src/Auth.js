// import React, { useEffect, useState } from "react";
// import firebaseConfig from "./firebaseConfig";
// import {onAuthStateChanged, getAuth} from 'firebase/auth'

// export const AuthContext = React.createContext();
// const auth = getAuth()
// export const AuthProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState(null);
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//   }, []);
//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };