import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://www.course-api.com/images/people/person-2.jpeg",
  },
  {
    url: "https://www.course-api.com/images/people/person-2.jpeg",
  },
  {
    url: "https://www.course-api.com/images/people/person-2.jpeg",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  objectFit: "contain",
  dots: "true",
  marginLeft: "63px",
  width: "89vw",
  flexWrap: "wrap"
};

function ImageSlider() {
  return (
    <div className="slideContainer">
      <Slide className="slide">
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider;
