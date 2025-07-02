import { useEffect, useState } from "react";
import requests from "./netflixApi";
import axios from "axios";

const Home = () => {
  const [netflixData, setNetflixData] = useState([]);

  const getData = () => {
    axios
      .get(requests.requestTopRated)
      .then((res) => setNetflixData(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {netflixData.map((elem) => {
        return (
          <>
            <div>
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500/${elem.backdrop_path}`}
                alt="image"
              />
              1
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
