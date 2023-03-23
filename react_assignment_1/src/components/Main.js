import React, { useState } from "react";

const Main = ({ items }) => {
  const [showPara, setShowPara] = useState(true);
  const [noOfTimes, setNoOfTimes] = useState(0);

  return (
    <>
      <button
        className="button"
        onClick={() => {
          setShowPara((prev) => !prev);
          setNoOfTimes((prev) => prev + 1);
        }}
      >
        Display Details
      </button>
      <span>{noOfTimes} times clicked.</span>
      <section>
        {showPara && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero
            reiciendis molestias asperiores nihil et necessitatibus quasi
            inventore quidem, adipisci laboriosam. Blanditiis beatae
            perspiciatis amet tempora quia ipsam maiores sapiente.
          </p>
        )}
        {items.map((itemText, index) => (
          <p key={index}>{itemText}</p>
        ))}
      </section>
    </>
  );
};

export default Main;
