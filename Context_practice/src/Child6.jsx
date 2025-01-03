import React, { useContext } from "react";
import { location } from "./Child4"; 

function Child6() {
  const { city } = useContext(location);

  return (
    <div>
      <h1>Live in {city}</h1>
    </div>
  );
}

export default Child6;
