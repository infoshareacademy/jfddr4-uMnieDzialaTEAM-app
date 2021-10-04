import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return currentUser;
}
