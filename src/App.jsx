import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get("https://randomuser.me/api");
      console.log(response);
      setUser(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
console.log(user);
  return (
    <div className="container">
       {user.map((userInfo) => { 
        return <Card {...userInfo} />

      })} 
      <p>hello</p>
    </div>
  );
}

export default App;
