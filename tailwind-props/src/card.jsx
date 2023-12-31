import React from 'react'
import "./index.css"

function Card(props) {

    console.log(props.userName)  

  return (
    <>
        <div className="relative h-[400px] w-[300px] rounded-md mb-10">
            <img
                src="https://images.pexels.com/photos/7372338/pexels-photo-7372338.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                {props.userName}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
               {props.btnText || "visit me"} 
                </button>
            </div>
        </div>

</>
  )
}

export default Card;