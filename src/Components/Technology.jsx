import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/react.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/expressjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";


const Technology = () => {

    const Technologies = [
        {
            id:1,
            src: html,
            title:'HTML',
            style: 'shadow-orange-500'
        },

        {
            id:2,
            src: css,
            title:'CSS',
            style: 'shadow-blue-500'
        },

        {
            id:3,
            src: javascript,
            title:'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },

        {
            id:4,
            src: reactjs,
            title:'REACT JS',
            style: 'shadow-cyan-500'
        },

        {
            id:5,
            src: node,
            title:'NODE JS',
            style: 'shadow-green-500'
        },

        {
            id:6,
            src: expressjs,
            title:'EXPRESS JS',
            style: 'shadow-white'
        },

        {
            id:7,
            src: mongodb,
            title:'MONGODB',
            style: 'shadow-green-400'
        },

        {
            id:8,
            src: tailwind,
            title:'TAILWIND CSS',
            style: 'shadow-sky-500'
        },

        {
            id:9,
            src: github,
            title:'GITHUB',
            style: 'shadow-gray-400'
        },

        
    ]

  return (
    <div name="technology" className="bg-gradient-to-b from-gray-800 to-black w-full h-full">

        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Technology</p>
                <p className="py-6">T-hese are the Technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    Technologies.map(({id,src,title,style}) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                    ))
                }

            </div>
        </div>


    </div>
  )
}

export default Technology;