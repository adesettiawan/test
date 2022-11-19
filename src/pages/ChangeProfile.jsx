import React, { useState } from "react";

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  return (
    <>
      <div>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        {/* <button onClick={() => setUsername(newUsername)}>
          Change Username
        </button> */}
      </div>
    </>
  );
};

export default ChangeProfile;
