import React from "react";
import TinySlider from "tiny-slider-react";

function Carousel() {
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: true
  };

  const imgs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTP3uTZdHAuseUS3bQa3ujPt7wHaa-Jg7cv6TymNbPoB67kwLS&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0LTiOaYfBKOQdxGWfmUwISx0M2iZrBBmKMfiLsPYRPMj1AOyH&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4v5CxryJOS8LMiLgVI4NE4o8b4JZ08tlv15o0XCrSK1o6Ue69&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPxM-QhZiha2gRbK7TjtCnvEFTL7B3nbY1PJ8zT6sl5hymfLwr&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp-92UBT4q6QasGsO3PEfrfly1Q7bJLxsbq7SOxfRDvHGRlM5k&usqp=CAU"
  ];

  const loadingImage =
    "data:image/gif;base64, R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

  return (
    <div>
      <TinySlider
        settings={settings}
        className="single-listing-carousel"
      >
        {imgs.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              className="single-listing-carousel-images tns-lazy-img"
              id={`single-listing-carousel-image${index}`}
              src={loadingImage}
              data-src={el}
              alt="single listing images"
            />
          </div>
        ))}
      </TinySlider>
    </div>
  );
}

export default Carousel;
