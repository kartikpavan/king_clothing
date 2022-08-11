import React from "react";

const categories = [
  { id: 1, title: "Hats" },
  { id: 2, title: "Jackets" },
  { id: 3, title: "Sneakers" },
  { id: 4, title: "Womens" },
  { id: 5, title: "Mens" },
];
const Categories = ({ id, title }) => {
  return (
    <div
      id="categories-container"
      className="p-6 w-screen flex justify-between flex-wrap gap-8"
    >
      {categories.map((item) => {
        return (
          <div
            key={item.id}
            id="single-category-container"
            className="min-w-[30%] h-[340px] flex items-center justify-center flex-auto border border-black overflow-hidden "
          >
            <div id="bg-image" className="w-full h-full flex justify-center items-center">
              <div id="category-body " className="flex flex-col items-center p-10 border border-black gap-4">
                <h1 className="text-3xl">{item.title}</h1>
                <button className="btn btn-lg btn-outline ">SHOP NOW</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
