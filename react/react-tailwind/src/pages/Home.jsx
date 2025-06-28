import requests from "../Request";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [urlData, setUrlData] = useState([]);
  console.log(urlData);

  const getData = async () => {
    axios
      .get(requests.requestPopular)
      .then((res) => {
        // console.log(res.data.results[0].id);
        return setUrlData(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {urlData.map((elem) => {
        console.log(elem.backdrop_path);
        return (
          <div className="w-full h-screen flex flex-col bg-gray-800">
            <img
              key={elem.id}
              src={`https://image.tmdb.org/t/p/w400/${elem?.backdrop_path}`}
              alt=""
            />
          </div>
        );
      })}
      <button
        className="p-4 bg-orange-950 text-white rounded-xl hover:bg-orange-700 transition-all duration-300"
        onClick={getData}
      >
        Get Data
      </button>
    </>
  );
};

export default Home;
