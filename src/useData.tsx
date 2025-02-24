import { useEffect , useState } from "react";

async function getData(url: string) {

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

const useData = (url: string) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    getData(url)
      .then((data) => setData(data))
      .catch((err) => setError(err.message)); // Ensure we store a string, not an Error object
  }, []);

  return { data, error };
}

export default useData;