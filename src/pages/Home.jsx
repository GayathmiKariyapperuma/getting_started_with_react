import React, { useState } from "react";

function Home() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Getting Started with React</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus eligendi assumenda culpa odio maxime veritatis aperiam.
        Cupiditate, enim, provident eaque officiis iusto eligendi, modi unde
        voluptatum officia asperiores incidunt.
      </p>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>add 1</button>
    </>
  );
}

export default Home;
