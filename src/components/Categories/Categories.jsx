import React from "react";

const categories = [
  {
    id: 1,
    title: "Hats",
    imgUrl: 'https://threadcurve.com/wp-content/uploads/2021/09/1-woman-wear-straw-conical-hat-Sep152021-1.jpg'
  },
  {
    id: 2,
    title: "Jackets",
    imgUrl: 'https://www.wallpaperup.com/uploads/wallpapers/2016/07/09/995096/cb250756686b7f832549291e2ba7afc1-700.jpg'
  },
  {
    id: 3,
    title: "Sneakers",
    imgUrl: 'https://blog.sneakersnstuff.com/wp-content/uploads/2015/02/Sneakersnstuff-adidas-Group1-1050x700.jpg'
  },
  {
    id: 4,
    title: "Women's",
    imgUrl: 'https://cdn.shopify.com/s/files/1/0162/2116/files/photo-shoot-outfits-with-handbags.jpg?v=1585402442'
  },
  {
    id: 5,
    title: "Mens",
    imgUrl: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/ezgif-sixteen_nine_384.jpg?size=948:533'
  },
];
const Categories = ({id, title}) => {
  return (
    <div
      id="categories-container"
      className="p-4 w-screen flex justify-between flex-wrap gap-8"
    >
      {categories.map((item) => {
        return (
          <div
            key={item.id}
            id="single-category-container"
            className="min-w-[30%] h-[340px] flex items-center justify-center flex-auto border border-black overflow-hidden "
          >
            <div id="bg-image" className="w-full h-full flex justify-center items-center hover:scale-110 duration-1000"
                 style={{
                   backgroundImage: `url(${item.imgUrl})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover'
                 }}>
              <div id="category-body "
                   className="flex flex-col items-center p-8 border border-black gap-4 bg-[rgba(255,255,255,0.5)]">
                <h1 className="text-3xl text-black  ">{item.title}</h1>
                <button
                  className=" text-black border border-black p-4 hover:bg-white hover:text-gray-900 duration-300">SHOP
                  NOW
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
