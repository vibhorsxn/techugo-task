import React from 'react';
import  {Carousel} from 'react-bootstrap';

function Banner(){
    return(
        <>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp4371658.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>Avengers Infinity War</h3>
      <p>Official Marvel Cinematic Universe (MCU) series</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.hdqwalls.com/download/avengers-endgame4k-j8-2048x1152.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Avengers Age of Ultron</h3>
      <p>Official Marvel Cinematic Universe (MCU) series.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.hdqwalls.com/download/avengers-infinity-war-banner-4k-4c-2048x1152.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Avengers Infinity War</h3>
      <p>Official Marvel Cinematic Universe (MCU) series</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Banner;