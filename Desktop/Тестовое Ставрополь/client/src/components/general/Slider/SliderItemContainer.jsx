import React, {
  Children,
  cloneElement,
  useEffect,
  useState,
} from "react";
import { SliderButton } from "./SliderButton";

export const SliderItemContainer = ({ children, callback }) => {
  const PAGE_WIDTH = document.body.clientWidth;
 /*  console.log(); */

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [lastCountKey, setLastCountKey] = useState(0);
  const [currentCountKey, setCurrentCountKey] = useState(1);

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  if (currentCountKey < 1) {
    setCurrentCountKey(1);
  }

  useEffect(() => {
    if (currentCountKey == 1) {
      setShowLeftButton(true);
    }
    if (currentCountKey > 1) {
      setShowLeftButton(false);
    }
    if (currentCountKey == lastCountKey) {
      setShowRightButton(true);
    }
    if (currentCountKey != lastCountKey) {
      setShowRightButton(false);
    }

    let style = {
      minWidth: `${PAGE_WIDTH}px`,
      maxWidth: `${PAGE_WIDTH}px`,
    };
    let propsSliderItem = {
      offset: offset,
    };
    setPages(
      Children.map(children, (child) => {
        setLastCountKey(child.props.countKey);
        return cloneElement(child, { style, propsSliderItem });
      })
    );
    callback(lastCountKey, currentCountKey);
  }, [children, callback, lastCountKey, currentCountKey]);

  const handleLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return newOffset;
    });
    if (offset >= 0) {
      return setOffset(0);
    }
  };

  const handleRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      let max_width = PAGE_WIDTH * lastCountKey;
      if (currentCountKey >= lastCountKey) {
        setCurrentCountKey(lastCountKey);
      }
      if (newOffset <= -max_width) {
        return setOffset(-max_width + PAGE_WIDTH);
      }
      return newOffset;
    });
  };

  return (
    <div className="slider-item-container">
      <SliderButton
        left={true}
        positioningClassName="slider-button-left"
        onClick={() => {
          handleLeft();
          setCurrentCountKey(currentCountKey - 1);
        }}
        style={{ display: showLeftButton ? "none" : "block" }}
      />
      <div className="all-pages">{pages}</div>
      <SliderButton
        positioningClassName="slider-button-right"
        onClick={() => {
          handleRight();
          setCurrentCountKey(currentCountKey + 1);
        }}
        style={{ display: showRightButton ? "none" : "block" }}
      />
    </div>
  );
};
