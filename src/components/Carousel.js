import React from "react";
import {default as MultiCarousel} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      {(props.images && props.images.length > 0)&&
        <MultiCarousel
          responsive={responsive}
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

        </MultiCarousel>}
    </div>
  );
}

export default Carousel;
