import useData from "../useData.tsx";
import { Link } from "react-router-dom";
import "./Cards.scss";

function Cards() {

  let { data, error } = useData("http://localhost:5555/api/logements/");

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="home">
      <div className="banner">
        <p>Chez vous, partout et ailleurs</p>
        <img src="banner1.webp" alt="banner" />
      </div>
        <div className="cards">
          {data.length > 0 ? (
            data.map((item) => (
              <Link key={item.id} to={item.id} className="card">
                <img src={item.cover} alt={item.title} />
                <p>{item.title}</p>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
    </div>
  );
}

export default Cards;
