import React, { useState } from "react";
import { UserData } from "./types";
import "./App.css";

function App() {
  const [user, setUser] = useState<UserData>({
    name: "",
    age: 0,
    address: "",
  });

  return (
    <div className="App">
      <p>Test</p>
    </div>
  );
}

export default App;

// Fetch user from `https://randomuser.me/api/`
// Display at least the users `address`, `age` and `name`.
// Make it possible to change the state of the name field through form input
// For each new load of the application, a new user should appear.
