import { useState } from "react";
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

  return (
    <>
      <button
        onClick={getData}
        className="bg-amber-900 text-white p-2 rounded-2xl"
      >
        Get Data
      </button>
      {netflixData.map((elem) => {
        return (
          <>
            <div>
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500/${elem.backdrop_path}`}
                alt="image"
              />{" "}
              1
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
