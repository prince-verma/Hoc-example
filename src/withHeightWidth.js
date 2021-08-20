import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const withHeightWidth = (Comp) => {
  function Hoc(compoProps) {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <Comp
        {...compoProps}
        width={windowDimensions.width}
        height={windowDimensions.height}
      />
    );
  }

  return Hoc;
};

export default withHeightWidth;
