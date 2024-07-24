import React from "react";
import "./main.css";
import Tile from "../Tile/Tile.jsx";

const Main = () => {
  return (
    <>
      <main>
        {Array.from({ length: 12 }).map((asd) => (
          <Tile></Tile>
        ))}
      </main>
    </>
  );
};

export default Main;
