import { useState } from "react";
import "./Carousel.scss";

function Carousel({ data }) {
  const numberOfImages = data.pictures?.length;

  const [curentIndex, setCurentIndex] = useState(0);

  function showOverlay() {
    if (numberOfImages !== 1) {
      function handlePrev() {
        if (curentIndex === 0) {
          setCurentIndex(numberOfImages - 1);
        } else {
          setCurentIndex(curentIndex - 1);
        }
      }
      function handleNext() {
        if (curentIndex === numberOfImages - 1) {
          setCurentIndex(0);
        } else {
          setCurentIndex(curentIndex + 1);
        }
      }
      function showNubers(){
        return (
          <div className="carousel-numbers">
            {curentIndex + 1}/{numberOfImages}
          </div>
        )
      }
      return (
        <>
          <svg
            onClick={handlePrev}
            className="prev"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
          <svg
            onClick={handleNext}
            className="next"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
          {showNubers()}  
        </>
      )
    }
    else {
      return null
    }
  }
  return (
    <div className="carousel">
      {showOverlay()}
      {data.pictures?.map((picture: string, index: number) => (
        <img
          key={index}
          className={index === curentIndex ? "active" : "hidden"}
          src={picture}
          alt={`Picture ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Carousel;
