import React from "react";
import { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

const ToyContainer = () => {

  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      <ToyCard />
    </div>
  );
};

export default ToyContainer;
