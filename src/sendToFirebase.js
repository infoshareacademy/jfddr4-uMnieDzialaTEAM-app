import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "./firebaseConfig";

// Test if firebase works
const sendToFirebase = async function () {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Adammmmm",
      last: "Lovelaceeeeee",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default sendToFirebase;
