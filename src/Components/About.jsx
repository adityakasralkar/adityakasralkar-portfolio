import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl ">
          I'm Aditya Kasralkar . I'm Pursuing my "Bachelor of Engineering" in Computer Engineering at Aditya Silver Oak Institute of Technology , Ahmedabad.
        </p>

        <br />

        <p className="text-xl">
          An Enthusiast MERN Stack Developer with hands-on experience in developing projects by self . Have a good konwledge about the developing the websites and webapplications.
        </p>
      </div>
    </div>
  )
}

export default About;