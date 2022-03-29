export const SliderImage = ({ positioningClassName, backgroundImage, ...style }) => {
  positioningClassName
    ? (positioningClassName = positioningClassName + " ")
    : (positioningClassName = "");

  return (
    <div {...style} className={`${positioningClassName}slider__image-wrapper`}>
      <div className={backgroundImage} />
    </div>
  );
};
