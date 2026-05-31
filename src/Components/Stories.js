/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useMemo, useState } from 'react';
import picture12 from '../assets/20260519_162415.jpg'
import picture13 from '../assets/20260530_112606.jpg'
import picture14 from '../assets/20260530_114415.jpg'
import picture15 from '../assets/20260530_152629.jpg'
import picture16 from '../assets/20260530_153137.jpg'
import picture17 from '../assets/PXL_20260525_142314539.jpg'
import { motion } from 'framer-motion';

const Stories = () => {
    
    const variants = {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
        exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } }
    };
    const [index, setIndex] = useState(0);

    const storyArray = useMemo(() =>
        [
            {
            id: 1,
                title: "🌾 Success Story from the Field ",
                description: "Empowering farmers through practical training and knowledge sharing, these field activities have strengthened skills, boosted confidence, and promoted sustainable agriculture — laying a strong foundation for improved productivity and better livelihoods",
            photo: picture12
            },
            {
            id: 2,
            title: "🌾 Success Story from the Field ",
                description: "Empowering farmers through practical training and knowledge sharing, these field activities have strengthened skills, boosted confidence, and promoted sustainable agriculture — laying a strong foundation for improved productivity and better livelihoods",
            photo: picture13
            },
            {
                id: 3,
                title: "🌾 Success Story from the Field ",
                description: "Empowering farmers through practical training and knowledge sharing, these field activities have strengthened skills, boosted confidence, and promoted sustainable agriculture — laying a strong foundation for improved productivity and better livelihoods",
                photo: picture14
            },
            {
                id: 4,
                title: "🌾 Success Story from the Field ",
                description: "Empowering farmers through practical training and knowledge sharing, these field activities have strengthened skills, boosted confidence, and promoted sustainable agriculture — laying a strong foundation for improved productivity and better livelihoods",
                photo: picture15
            },
            {
                id: 5,
                title: "🌾 Success Story from the Field ",
                description: "Empowering farmers through practical training and knowledge sharing, these field activities have strengthened skills, boosted confidence, and promoted sustainable agriculture — laying a strong foundation for improved productivity and better livelihoods",
                photo: picture16
            },

            {
                id: 6,
                title: "🌾 Success Story from the Field ",
                description: "Empowering farmers through practical training and knowledge sharing, these field activities have strengthened skills, boosted confidence, and promoted sustainable ariculture — laying a strong foundation for improved productivity and better livelihoods",
                photo: picture17
            }
        ], []
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
            <div key={storyArray[index].id} className="absolute bg-blue-950 px-8 py-4 max-sm:p-4  max-sm:line-clamp-2 max-sm:text-sm rounded-b-md text-white text-xl w-full text-justify">
                <h1 className="text-2xl font-bold mb-2 text-amber-200">{storyArray[index].title}</h1>
                {storyArray[index].description}
            </div>
            <img className="w-full h-full object-cover rounded-md" src={storyArray[index].photo} alt="company" />

        </motion.div>
        
    )

}

export default Stories;