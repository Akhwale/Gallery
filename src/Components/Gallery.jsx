import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import "../Gallery.css";



export default function Gallery() {


  const [shuffledData, setShuffledData] = useState(shuffleArray(data));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShuffledData(shuffleArray(data));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [data]);

  function shuffleArray(array) {
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    return shuffledArray;
  }


  const textAnimate = {
    offScreen: {
      y: -100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.2,
      },
    },
  };


  const textAnimate2 = {
    offScreen: {
      y: 300,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.2,
      },
    },
  };


  const imageAnimate = {
    offScreen: {
      x: -200,
      opacity: 0,
      rotate:-30
    },
    onScreen: {
      x: 0,
      opacity: 1,
      rotate:0,
      transition: {
        type: "spring",
        duration: 3,
        bounce: 0.2,
        
      },
    },
  };
  

  return (
    <div className='gallery-container flex max-h-screen'>
    <div className="gallery w-1/2">
      {shuffledData.map((item) => (
        <motion.div 
        initial={"offScreen"}
            animate={"onScreen"}
            variants={imageAnimate}
        key={item.id} className="pics">
          <img src={item.imgSrc} alt={`Image ${item.id}`} className="" />
        </motion.div>
      ))}
    </div>

    <div className='w-1/2 bg-black flex items-center'>
        <div>
            <motion.h1
            initial={"offScreen"}
            animate={"onScreen"}
            variants={textAnimate}
            className='text-center text-gray-100 text-4xl'
            >Image Gallery</motion.h1>
            <motion.p 
            initial={"offScreen"}
            animate={"onScreen"}
            variants={textAnimate2}
            className='text-gray-100 p-5 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
                dolores in nostrum cupiditate. Quam cumque nostrum corrupti, odit soluta laudantium culpa!
                 Saepe ab debitis vitae dignissimos quam laboriosam doloribus quos.</motion.p>
        </div>
    </div>
    </div>
  );
}

let data = [
  { id: 1, imgSrc: image1 },
  { id: 2, imgSrc: image2 },
  { id: 3, imgSrc: image3 },
  { id: 4, imgSrc: image4 },
  { id: 5, imgSrc: image5 },
  { id: 6, imgSrc: image6 },
  { id: 7, imgSrc: image7 },
  { id: 8, imgSrc: image8 },
  { id: 9, imgSrc: image9 },
  { id: 10, imgSrc: image10 },
];
