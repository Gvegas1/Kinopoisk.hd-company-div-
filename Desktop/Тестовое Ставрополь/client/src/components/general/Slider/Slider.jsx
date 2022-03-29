import React, { Component } from "react";

import { SliderCounter } from "./SliderCounter";
import { SliderImage } from "./SliderImage";
import { SliderItem } from "./SliderItem";
import { SliderItemContainer } from "./SliderItemContainer";

export default class Slider extends Component {
  static ItemContainer = SliderItemContainer;
  static Item = SliderItem;
  static Counter = SliderCounter;
  static Image = SliderImage;

  constructor(props) {
    super(props);
    this.state = {
      countKey: 1,
    };
  }

  render() {
    return (
      <div className={`${this.props.positioningClassName} slider`}>
        {this.props.children}
      </div>
    );
  }
}
