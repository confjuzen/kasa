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
