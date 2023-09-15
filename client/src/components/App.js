import React from "react";
import { createRoot } from "react-dom";
import HomePage from "./Homepage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router>
  );
}

const appDiv = document.getElementById("app");

const root = createRoot(appDiv);
root.render(<App />);
