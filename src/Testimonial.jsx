import React from 'react'
import Card from './Card'
import { useState } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";


function Testimonial(props) {
    let reviews = props.reviews
    const [index, setIndex] = useState(0)

    //* left shift handler
const leftshifthandler = () => {
    if(index -1 < 0) {
        setIndex(reviews.length-1)
    }
    else {
        setIndex(index-1)
    }

}
//* righty shift handler
const rightshifthandler = () => {
    if(index + 1 >= reviews.length) {
        setIndex(0)
    }
    else {
        setIndex(index + 1)
    }

}


//* suprise me handler
const suprisemehandler = () => {
 let random =  Math.floor(Math.random() * reviews.length);
    setIndex(random);


}



  return (
    <div className=' w-[85vw] md:w-[700px] h-[50vh] flex flex-col justify-center  mt-10 transition-all hover:shadow-xl rounded-md bg-slate-100'>
        <div>
        <Card review= {reviews[index]} />
        

<div className="mx-auto  gap=3 h-[40px] font-bold flex  justify-center items-center ">
  <button className="text-3xl p-5 text-violet-400 hover:text-violet-600"  onClick={leftshifthandler}>
    <BsFillCaretLeftFill />
  </button>
  <button className="text-3xl p-5  text-violet-400 hover:text-violet-600 " onClick={rightshifthandler}>
    <BsFillCaretRightFill />
  </button>
</div>

<button className="bg-violet-200 w-[10rem] rounded-xl text-lg flex  text-slate-500  font-bold m-4 justify-center mx-auto p-3 border-2 border-purple-500 hover:bg-purple-500 hover:text-white" onClick={suprisemehandler} >
  Suprise me
</button>
</div>
    </div>
  )
}

export default Testimonial