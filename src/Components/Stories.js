/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useMemo, useState } from 'react';

import { motion } from 'framer-motion';

const Stories = () => {
    
    const variants = {
        enter: { x: -400 },
        center: { x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
        exit: { x: 0, transition: { duration: 0.6, ease: "easeInOut" } }
    };
    const [index, setIndex] = useState(0);

    const storyArray = useMemo(() => 
        [{ id: 1, title: "Story 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", photo: "https://images.pexels.com/photos/11350335/pexels-photo-11350335.jpeg" }, { id: 2, title: "Story 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", photo: "https://images.pexels.com/photos/26974534/pexels-photo-26974534.jpeg" }, { id: 3, title: "Story 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", photo: "https://images.pexels.com/photos/16560054/pexels-photo-16560054.jpeg" }], []
)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex === storyArray.length - 1 ? 0 : prevIndex + 1));
        }, 10000);

        console.log(storyArray[index].title);
        return () => clearInterval(interval); 

    }, [storyArray, index]);

    return (
        <motion.div key={storyArray[index].id }
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="slide" className="relative flex flex-col justify-end h-full">

            <h1 key={storyArray[index].id } className="absolute bg-blue-950 p-8 h-36 max-sm:line-clamp-2 max-sm:text-base rounded-b-md text-white text-xl w-full">{storyArray[index].description}</h1>
            <img className="w-full h-full object-cover rounded-md" src={storyArray[index].photo} alt="company" />

        </motion.div>
        
    )

}

export default Stories;