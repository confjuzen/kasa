import { useEffect , useState } from "react";

const url = "http://localhost:5555/api/logements";

async function getData() {


  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`http error status: ${response.status}`);
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("invalid json response");
  }
}

const useData = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch((err) => setError(err.message)); // Ensure we store a string, not an Error object
  }, []);

  return { data, error };


}

export default useData;