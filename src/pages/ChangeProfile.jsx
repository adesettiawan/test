import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useAppContext();

  return (
    <>
      <div>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button onClick={() => setUsername(newUsername)}>
          Change Username
        </button>
      </div>
    </>
  );
};

export default ChangeProfile;
