import React from "react";
import "./Gallery.scss";
import json from "../../../data.json";
import arrowLeft from "./arrow-left.png";
import arrowRight from "./arrow-right.png";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
    this.images = json[this.props.id].pictures;
    this.sliderLength = this.images.length;
  }

  // cannot use normal function because every new functiond efines its own this value?
  nextImage = () => {
    this.setState(
      // why did this not work with this.sliderLength
      this.state.current === this.images.length - 1
        ? { current: 0 }
        : { current: this.state.current + 1 }
    );
  };

  prevImage = () => {
    this.setState(
      this.state.current === 0
        ? { current: this.images.length - 1 }
        : { current: this.state.current - 1 }
    );
  };

  render() {
    return (
      <div className="gallery">
        <img
          src={arrowLeft}
          alt="arrow-left"
          className="arrow-left"
          onClick={this.prevImage}
        ></img>
        <img
          src={arrowRight}
          alt="arrow-right"
          className="arrow-right"
          onClick={this.nextImage}
        ></img>
        {this.images.map((image, index) => {
          return (
            // gibt es noch eine andere Möglichkeit als so? Oder liegt das daran,
            // dass alles komplett neu gerendert wird?
            // Wird alles komplett neu gerendert, wenns ich der state ändert?
            <div
              className={this.state.current === index ? "active" : "inactive"}
            >
              <img
                src={image}
                alt=""
                key={index}
                className="gallery__image"
              ></img>
            </div>
          );
        })}
      </div>
    );
  }
}

// why did a {" "} appear above the map?

export default Gallery;