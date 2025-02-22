//import { useParams } from "react-router";
//import useData from "./useData.tsx";
//import { Link } from "react-router-dom";
//
//
//
//function Kasa() {
//  
//  const { id } = useParams();
//  const{ data, error } = useData(id);
//  
//  return (
//    <div className="kasa">
//      {data.length > 0 ? (
//        data.map((item) => (
//          item.length > 0 ? (
//            item.map((photo) => (
//              <Link key={photo.pictures} to={item.pictures}>
//                <img src={photo.pictures} alt={item.title} />
//              </Link>
//            ))
//          ))
//      ) : (
//        <p>Loading...</p>
//      )}
//    </div>
//  );
//}
//
//export default Kasa;
//