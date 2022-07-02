import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  let counter = 0;
  counter++;
  const [user, setUser] = useState([]);

  useEffect(() => {
    handleClick();
  }, []);
  const handleClick = async (e) => {
    // e.preventDefault();  // throws error
    console.log("clicked");

    try {
      const response = await axios.get("https://randomuser.me/api");
      // console.log(response);
      setUser(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(user);
  return (
    <div className="flex-column justify-center items-center w-full border-black mt-10 ">
      <div className="flex flex-column justify-center items-center w-full border-black mt-10 ">
        {user.map((userInfo) => {
          console.log(userInfo);
          return <Card {...userInfo} key={counter} handleClick={handleClick} />;
        })}
      </div>
      <div className="flex flex-column justify-center items-center w-full mt-10 " >
        <button className="bg-rose-800 rounded-md w-40 h-20 animate-pulse" onClick={handleClick}>
          Random User
        </button>
      </div>
    </div>
  );
}

export default App;
