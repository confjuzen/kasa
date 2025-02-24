import { useParams, Navigate } from "react-router-dom";
import useData from "./useData.tsx";

const baseurl = "http://localhost:5555/api/logements/";

function Kasa() {
  
  const { id } = useParams();
  const url = baseurl + id;

  const{ data, error } = useData(url);
  console.log('loged url :'+url);
  


  if (error) {
    return <Navigate to="/404" />;
  }

  if (!data) {
    return <p>Loading...</p>;
  }


  return (
    <div className="kasa">
      <ul className="carousel">
        <button className="prev">
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
          </svg>
        </button>
        <button className="next">
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
          </svg>
        </button>
        {data.pictures?.map((picture: string, index: number) => (
          <li key={index}>
            <img src={picture} alt={`Picture ${index + 1}`} />
          </li>
        ))}
      </ul>
      <h2>{data.title}</h2>
      <p>{data.location}</p>
      <p>{data.host?.name}</p>
      <div>Description
        <p>{data.description}</p>
      </div>
      <ul>Equipments
        {data.equipments?.map((equipments: string, index: number) => (
          <li key={index}>{equipments}</li>
        ))}
      </ul>
    </div>
  );
}

export default Kasa;
