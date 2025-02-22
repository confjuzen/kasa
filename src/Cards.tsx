import useData from "./useData.tsx";

import { Link } from "react-router-dom";



function Cards() {

  let { data, error } = useData();

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="cards">
      {data.length > 0 ? (
        data.map((item) => (
          <Link key={item.id} to={item.id}>
            <img src={item.cover} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Cards;
