import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  Routes,
} from "react-router-dom";

function HomePage() {
  return (
    <p>This is the home page</p>
    // <Routes>
    //   <Route exact path="/">
    //   </Route>
    //   <Route path="/join" element={<RoomJoinPage />} />
    //   <Route path="/create" element={<CreateRoomPage />} />
    // </Routes>
  );
}

export default HomePage;
