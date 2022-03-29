import { Children, cloneElement, useEffect, useState } from "react";

export const SliderItem = ({
  children,
  countKey,
  propsSliderItem,
  ...style
}) => {
  const [sliderItems, setSlidertItems] = useState([]);

  useEffect(() => {
    let style = {
      transition: "transform 0.6s ease",
      transform: `translateX(${Object.values(propsSliderItem)}px)`,
    };

    setSlidertItems(
      Children.map(children, (child) => {
        return cloneElement(child, { style });
      })
    );
  }, [children, propsSliderItem]);

  if (!countKey) {
    return console.error(
      "Не обнаружен props с названием countKey в компоненте Slider.Item"
    );
  }
  countKey = " " + "slider-item" + countKey;

  return (
    <div {...style} className={`slider-item${countKey}`}>
      {sliderItems}
    </div>
  );
};
