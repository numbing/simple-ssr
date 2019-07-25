import React from "react";

const Home = () => {
  return (
    <div>
      <div>I AM HOME</div>
      <button onClick={() => console.log("clicked")}>click me</button>
    </div>
  );
};

export default { component: Home };
