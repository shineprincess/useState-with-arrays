import React, { useState } from "react";


const Hooks = () => {

  const myBioData = [
    {
      id: 0,
      myName: "Piyu",
      age: 19,
    },
    {
      id: 1,
      myName: "Piya",
      age: 19,
    },
    {
      id: 2,
      myName: "Elena",
      age: 20,
    },
  ];

  const [state, setState] = useState(myBioData);

  const clearState = () => {
    setState([]);
  };

  return (
    <>
      {state.map((currElem) => 
        <h1 className="heading__style" key={currElem.id}> Name : {currElem.myName} Age: {currElem.age}</h1>)
      }
        <button className = "buttonHooks__style"  onClick={clearState}> Clear </button>
    </>
  );
};

export default Hooks;
