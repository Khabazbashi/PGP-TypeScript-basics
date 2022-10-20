import React, { useState, useEffect } from "react";
import { UserData } from "./types";
import "./App.css";

function App() {
  const [user, setUser] = useState<UserData>({
    name: "",
    age: 0,
    address: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const firstUser = data.results[0];

      setUser(() => {
        return {
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name,
        };
      });
    };
    getUserData();
  }, []);

  return (
    <div className="App">
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.address}</p>
    </div>
  );
}

export default App;

// Fetch user from `https://randomuser.me/api/`
// Display at least the users `address`, `age` and `name`.
// Make it possible to change the state of the name field through form input
// For each new load of the application, a new user should appear.
