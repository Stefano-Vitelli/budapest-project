import React from "react";
import Navbar from "./Navbar";
import DinamicNavBar from "./DinamicNavBar";

function App() {
  return (
    <div className="content">
      <main className="main-content">
        <DinamicNavBar />
        <Navbar />
      </main>
    </div>
  );
}
export default App;
