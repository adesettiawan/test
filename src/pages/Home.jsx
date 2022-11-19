import React from "react";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { username } = useAppContext();
  return (
    <>
      <div>
        <h1>Welcome, username is: {username}</h1>
      </div>
    </>
  );
};

export default Home;
