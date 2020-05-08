import React from "react";
import TinySlider from "tiny-slider-react";

function Carousel(props) {
  const settings = {
    items: 1,
    nav: true,
    mouseDrag: true,
    controls: true,
    gutter: 10,
    center: true,
  };
  console.log(props);

  const loadingImage =
    "data:image/gif;base64, R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
  return (
    <div>

      {(props.images && props.images.length > 0)&&
        <TinySlider
          settings={settings}
          className="single-listing-carousel"
          >


          {props.images.map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                className="single-listing-carousel-images"
                id={`single-listing-carousel-image${index}`}
                src={image}
                alt="single listing images"
              />
            </div>
          ))}

        </TinySlider>}
    </div>
  );
}

export default Carousel;
