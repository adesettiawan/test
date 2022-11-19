import React from "react";
import { useAppContext } from "../context/AppContext";
import ChangeProfile from "./ChangeProfile";

const Profile = () => {
  const { username } = useAppContext();

  return (
    <>
      <div>
        <h1>My profile, username is: {username}</h1>
        <br />
        <ChangeProfile />
      </div>
    </>
  );
};

export default Profile;
