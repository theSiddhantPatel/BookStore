import React from "react";
import list from "../list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you{""}{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nemo veritatis omnis corrupti autem dicta tempore, reiciendis illo
            culpa a mollitia quo odit. Sapiente possimus, cupiditate magnam
            ratione dolorem nesciunt. Voluptatibus vero consequuntur ut quas sed
            totam quis earum fugiat?
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 text-white rounded-full px-4 py-2 rounded-md: hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
