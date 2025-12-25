import React from 'react'
import c_programming from "../images/Technologies/c_programming.jpg";
import cpp from "../images/Technologies/cpp.jpg";
import html from "../images/Technologies/HTML.jpg";
import css from "../images/Technologies/css.jpg";
import javaScript from "../images/Technologies/JavaScript.jpg";
import react from "../images/Technologies/React.jpg";
import node from "../images/Technologies/node.jpg";
import mern from "../images/Technologies/MERN.jpg";

const Technologies = () => {
    const technology=[
        {
            name:"C Programming",
            image:c_programming,
        },
        {
            name:"C++ Programming",
            image:cpp,
        },
        { 
            name:"HTML",
            image:html,
        },
        {
            name:"CSS",
            image:css,
        },
        {
            name:"JavaScript",
            image:javaScript,
        },
        {
            name:"ReactJS",
            image:react,
        },
        {
            name:"NodeJS",
            image:node,
        },
        {
            name:"MERN",
            image:mern,
        }
    ]
  return (
    <>
        <div className='w-full h-auto'>
            <h1 className='text-3xl md:text-5xl font-heading text-pink-600'>Technical Skills</h1>
            <div className='w-full h-full'>
                <div className='grid grid-cols-4 gap-4'>
                {
                  technology.map((item,index)=>(
                  <div key={index} className='flex flex-col items-center gap-2'>
                    <div className='h-32 w-42'>
                        <img src={item.image} alt={item.name} className='h-full w-full rounded object-cover' />
                    </div>
                    <div className='text-xl text-pink-600'>{item.name}</div>
                  </div>
                  ))
                }
                </div>
            </div>
        </div>

    </>
  )
}

export default Technologies