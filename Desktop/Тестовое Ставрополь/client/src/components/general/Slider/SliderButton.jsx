import React from "react";

export const SliderButton = ({
  onClick,
  positioningClassName,
  rotate,
  ...props
}) => {
  let style = {
    ...props.style,
    transform: rotate ? "rotate(180deg)" : "rotate(0)",
  };

  return (
    <button
      style={style}
      className={`slider-button ${positioningClassName}`}
      onClick={onClick}
    />
  );
};
