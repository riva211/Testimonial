import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative ">
      <div className="absolute top-[10rem]  lg:top-[-4rem] z-[10] mx-auto ">
        <img 
        className="aspect-square  rounded-full w-[140px] h-[140px] "
        src={review.image} alt={review.name} />
        <div className="w-[140px] h-[140px] top-[-6px] absolute z-[-10] rounded-full bg-purple-500"></div>
      </div>
      

      <div className="text-center bottom-2 mt-7">
        <p className="font-bold text-2xl space-x-1 tracking-wider capitalize"> {review.name} </p>
      </div>
      <div className="text-center ">
        <p className="font-bold uppercase text-sm text-violet-300">{review.job}</p>
      </div>

<div className="text-violet-300  mx-auto mt-5">

      <BiSolidQuoteAltLeft />
</div>



      <div  className="text-center mt-3 h-20 flex-wrap text-slate-500" >{review.text}</div>
      <div className="text-violet-300  mx-auto"> 

<BiSolidQuoteAltRight />
<br></br>
</div>
    </div>
  );
}

export default Card;
