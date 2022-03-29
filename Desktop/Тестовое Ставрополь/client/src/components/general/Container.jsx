import React from "react";

export const Container = ({ sectionContainer, children }) => {
  sectionContainer
    ? (sectionContainer = " " + sectionContainer)
    : (sectionContainer = "");

  return <div className={`container${sectionContainer}`}>{children}</div>;
};
