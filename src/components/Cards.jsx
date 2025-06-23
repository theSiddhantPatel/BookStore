import React from "react";
import bookImage from "../../src/book.jpg";
function Cards({ item }) {
  // console.log(item.image);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card  w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={bookImage} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-500 py-1">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
