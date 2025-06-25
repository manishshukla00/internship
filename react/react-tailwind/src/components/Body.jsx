import React from "react";

const Body = () => {
  const cards = [
    {
      title: "Card 1",
      text: "This is the first card.",
      img: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Computer-Photos-Full-HD.jpg",
    },
    {
      title: "Card 2",
      text: "This is the second card.",
      img: "https://www.bing.com/th/id/OIP.KBakfbaN7EYkOF2wMA09XgHaEK?w=244&h=211&c=8&rs=1&qlt=90&o=6&cb=iavawebpc1&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Card 3",
      text: "This is the third card.",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Card 4",
      text: "This is the fourth card.",
      img: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-lg w-64 p-4 flex flex-col items-center"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-32 h-32 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600 text-center">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
