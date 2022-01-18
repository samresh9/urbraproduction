import React from "react";
import { useState, useEffect } from "react";
import { db } from "../utility/firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const FirebaseData = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "form");

  //get user from the firebase
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  });

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <div>
        {" "}
        {users.map((user) => {
          return (
            <div>
              <h1>Firstname: {user.firstname}</h1>
              <h1>Lastname: {user.lastname}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Phone number: {user.number}</h1>
              <h1>Message: {user.message}</h1>

              <button
                style={{ background: "red" }}
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirebaseData;
