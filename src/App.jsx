import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [username, setUsername] = useState("Jhon Doe");

  return (
    <>
      <AppContext.Provider value={{ username, setUsername }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
