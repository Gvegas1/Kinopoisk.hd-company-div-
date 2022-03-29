import React from "react";

export const BackgroundContainer = ({ backgroundImage }) => {
  backgroundImage
    ? (backgroundImage = " " + backgroundImage)
    : (backgroundImage = "");

  return <div className={`background-container${backgroundImage}`} />;
};
