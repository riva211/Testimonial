import React from "react";
import Testimonial from "./Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className="bg-slate-300 flex flex-col  item-center justify-center h-[100vh] w-[100vw] ">
      <div className="text-center">
        <h1 className="heading-1 font-bold  text-4xl  ">Our Testimonials</h1>
        <div className="h-1 w-[15rem] justify-center mx-auto items-center mt-1 mb-10 bg-violet-500"></div>
      </div>
      <div className="flex justify-center">
    
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
