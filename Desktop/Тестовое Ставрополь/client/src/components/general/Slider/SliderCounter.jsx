export const SliderCounter = ({
  positioningClassName,
  lastCount,
  currentKey,
}) => {
  positioningClassName
    ? (positioningClassName = positioningClassName + " ")
    : (positioningClassName = "");

  return (
    <div className={`${positioningClassName}slider__counter-wrapper`}>
      <div className="slider__counter-child">
        {currentKey}/{lastCount}
      </div>
    </div>
  );
};
