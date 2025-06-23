import React from "react";
import Home from "./home/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Course from "./components/Course";
import { Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
    // <div className="p-4 space-y-4">
    //   <h1 className="text-3xl font-bold text-purple-600 underline">
    //     Tailwind is Working 🎉
    //   </h1>
    //   <button className="btn btn-info">Test daisyUI</button>
    // </div>
  );
}

export default App;
