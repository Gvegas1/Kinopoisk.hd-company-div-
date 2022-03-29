import React from "react";

export const SliderButton = ({
  onClick,
  positioningClassName,
  left,
  right,
  ...props
}) => {
  let style = {
    ...props.style,
    transform: left ? "rotate(180deg)" : "rotate(0)",
  };

  return (
    <button
      style={style}
      className={`slider-button ${positioningClassName}`}
      onClick={onClick}
    />
  );
};
