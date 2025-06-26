import React from "react";
import Body from "../components/Body";

const Home = () => {
  return (
    <>
      <div className="w-3/4 h-screen border-2 border-b-black m-auto">
        Main div
        <div className="w-[400px] h-[400px] grid grid-cols-2 border-2 border-b-black">
          <div className="w-[40px] h-[40px] border-2 border-b-black">1</div>
          <div className="w-[40px] h-[40px] border-b-black border-2">2</div>
          <div className="w-[40px] h-[40px] border-b-black border-2">3</div>
          <div className="w-[40px] h-[40px] border-b-black border-2">4</div>
        </div>
      </div>
    </>
  );
};

export default Home;
