import { useParams, Navigate } from "react-router-dom";
import useData from "./useData.tsx";
import Dropdown from "./dropdown.tsx";
import { useState } from "react";

const baseurl = "http://localhost:5555/api/logements/";

function Kasa() {
  const { id } = useParams();
  const url = baseurl + id;

  const { data, error } = useData(url);
  console.log("loged url :" + url);

  if (error) {
    return <Navigate to="/404" />;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  function Stars() {
    const stars = Math.max(0, Math.min(5, Math.floor(data.rating)));
    return (
      <div className="stars">
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="#FF6060"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" />
          </svg>
        ))}
        {Array.from({ length: 5 - stars }).map((_, i) => (
          <svg
            key={i}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="#E3E3E3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" />
          </svg>
        ))}
      </div>
    );
  }

  function Tags() {
    return (
      <div className="tags">
        {data.tags?.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>
    );
  }


  function Carousel() {

    const numberOfImages = data.pictures?.length;
    console.log("numberOfImages"+numberOfImages);


    const [curentIndex, setCurentIndex] = useState(0);

    function handlePrev() {
      if (curentIndex === 0) {
        setCurentIndex(numberOfImages - 1);
      }else{
        setCurentIndex(curentIndex - 1);
      }
      console.log("curentIndex"+curentIndex);
    }
    function handleNext() {
      if (curentIndex === numberOfImages - 1) {
        setCurentIndex(0);
      }else{
      setCurentIndex(curentIndex + 1);
      }
    }
    return (
    <div className="carousel">
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

  return (
    <div className="kasa">
      <Carousel />
      <div className="kasa-info">
        <h2 className="kasatitle">{data.title}</h2>
        <p className="location">{data.location}</p>
      </div>
      <div className="host">
        <p>{data.host?.name}</p>
        <img src={data.host?.picture} alt={`${data.host?.name} avatar`} />
      </div>
      <Tags />
      <Stars />
      <Dropdown title="Description" content={data.description} />
      <Dropdown
        title="Équipements"
        content={data.equipments?.map((equipments: string, index: number) => (
          <li key={index}>{equipments}</li>
        ))}
      />
    </div>
  );
}

export default Kasa;
