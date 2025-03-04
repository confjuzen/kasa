import { useParams, Navigate } from "react-router-dom";
import useData from "../useData.tsx";
import Dropdown from "../components/dropdown.tsx";
import Carousel from "../components/Carousel.tsx";
const baseurl = "http://localhost:5555/api/logements/";
import Stars from "../components/Stars.tsx";
import Tags from "../components/Tags.tsx";
import "./Kasa.scss";

function Kasa() {
  const { id } = useParams();
  const url = baseurl + id;
  const { data, error } = useData(url);

  if (error) {
    return <Navigate to="/404" />;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="kasa">
      <Carousel data={data} />
      <div className="kasa-info">
        <h2 className="kasatitle">{data.title}</h2>
        <p className="location">{data.location}</p>
      </div>
      <div className="host">
        <p>{data.host?.name}</p>
        <img src={data.host?.picture} alt={`${data.host?.name} avatar`} />
      </div>
      <Tags data={data}/>
      <Stars data={data} />
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
