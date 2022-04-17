import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import slider1 from "../../../../Images/SliderImages/slider1.jpg";
import slider2 from "../../../../Images/SliderImages/slider2.jpg";
import slider3 from "../../../../Images/SliderImages/slider3.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "75vh", objectFit: "cover" }}
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Check your tooth regularly</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "75vh", objectFit: "cover" }}
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Safe your Child tooth</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "75vh", objectFit: "cover" }}
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Stronger your Tooth</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
