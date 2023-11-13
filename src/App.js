import React, { useState } from "react";
import User from './components/user';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFetchData = () => {
    fetchData();
  }

  return (
    <div className="App">
      <h3> Json placeholder </h3>
      <br />
      <button onClick={handleFetchData}>Fetch Data</button>
      <div>
        {users.map((user) => (
          <User
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
