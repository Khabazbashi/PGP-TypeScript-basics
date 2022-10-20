import React, { useState, useEffect } from "react";
import { UserData } from "./types";
import UserName from "./Components/UserName";
import "./App.css";

function App() {
  const [user, setUser] = useState<UserData>({
    name: "",
    age: 0,
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setUser({ ...user, name: value });
  };

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
      <h1>UserProfile</h1>
      <UserName user={user} />
      <p>{user.age}</p>
      <p>{user.address}</p>
      <input type="text" value={user.name} onChange={handleChange} />
    </div>
  );
}

export default App;
