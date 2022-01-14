import React, { useState, useEffect } from "react";

function Home(props) {
  const [toggle, setToggle] = useState(false);

  //componentDidMount
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <>
      <h1>{props.title}</h1>
      {toggle && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatibus eligendi assumenda culpa odio maxime veritatis aperiam.
          Cupiditate, enim, provident eaque officiis iusto eligendi, modi unde
          voluptatum officia asperiores incidunt.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)}>add 1</button>
    </>
  );
}

export default Home;
