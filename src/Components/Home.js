
import { TbTargetArrow } from "react-icons/tb";
import { IoIosEye } from "react-icons/io";
import { TbBulbFilled } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { MdLibraryAddCheck } from "react-icons/md";
import { easeInOut, motion } from 'framer-motion';
import Greetings from './Greetings';
import { PiPlusBold } from 'react-icons/pi';
import {News, Partnerlist} from './Mission';
import Newscard from './Newscard';
import Partner from './Partner';
import Background from './Background';
import Ourservice from './Ourservice';
import Cardmission from './Cardmission';
import picture2 from '../assets/2.webp'
import picture1 from '../assets/8.jpg'
import picture3 from '../assets/11.jpg'
import img_vid from '../assets/5072457-hd_1920_1080_25fps.mp4'
import img_vid2 from '../assets/kilimo.mp4'
import Stories from "./Stories";
import Logo from '../assets/logo.webp'



const Home = ()=>{
  const fullText = " Near Consult and Company Limited ";
    const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
    
  }, []);

    return(
        <div className='max-sm:text-sm transition-all duration-1000 text-gray-700'>
            <section className='flex items-center justify-center md:w-full md:h-full md:relative'>
           
                <Background />
                <motion.div className="absolute flex flex-col gap-6 items-center">
                    <motion.h1
                     className=' text-5xl max-sm:text-lg text-white'>
                        {displayedText}
                    </motion.h1>
                    <div className='w-[520px] max-sm:w-[320px] flex justify-center text-white max-sm:text-sm bg-[rgba(0,0,0,0.5)] p-8'>
                        <Greetings />
                    </div>
                   
                    <button className='md:bg-amber-500 max-sm:bg-amber-500 max-sm:p-2  md:p-2 md:pl-3 md:pr-3 rounded-sm text-blue-950'>Learn More</button>
                     
                </motion.div>
            </section>
<motion.div className='max-sm:text-sm mx-auto p-2 text-justify max-sm:p-0 bg-blue-950'>

    <motion.ul 
    initial={{opacity:0, y:20}} 
    whileInView={{opacity:1, y:0}}
    exit={{opacity:0, y:-20}}

    transition={{duration:1, ease:easeInOut}}
    className='flex space-x-6 '>
    <div className='flex flex-col w-full max-sm:pt-0'>
        <ul className='grid grid-cols-3 max-sm:flex max-sm:justify-between max-sm:p-4 gap-4 text-white '>
            <li className='flex flex-col items-center max-sm:justify-center space-y-1'>
                <div className='flex items-center justify-center font-bold'>
                    <h1 className='text-3xl max-sm:text-lg'>15</h1>
                    <h1 className='text-3xl max-sm:text-lg'><PiPlusBold/></h1>
                </div>
                <div classname="max-sm:text-sm max-sm:text-center">Years Experience</div>
            </li>
            <li className='flex flex-col items-center space-y-1'>
                <div className='flex items-center font-bold'>
                     <h1 className='text-3xl max-sm:text-lg'>100</h1>
                     <h1 className='text-3xl max-sm:text-lg'><PiPlusBold/></h1>
                 </div>
                <div>Project Completed</div>
            </li>
            <li className='flex flex-col items-center space-y-1'>
                <div className='flex items-center font-bold'>
                    <h1 className='text-3xl max-sm:text-lg'>98%</h1>
                </div>
                <div>Client Satisfaction</div>
            </li>
        </ul>
    </div> 
   </motion.ul>
            </motion.div>

            {/****************Who we are *************************/}

            <section className='grid justify-between md:grid-cols-2 space-x-4 max-sm:space-x-2 max-sm:grid-cols-1 py-8 px-4 max-sm:px-2 '>
                <div className="px-8 max-sm:px-2">
                    <h1 className='text-5xl text-blue-950 max-sm:text-2xl py-8 max-sm:py-2'>Who We Are  </h1>
                    <div className="text-lg md:text-justify max-sm:text-sm">
                        Near Consult and Company Limited (NCCL) is an established Capacity Building, Training, Research, Agribusiness, Business, and Management Consultancy Company in the United Republic of Tanzania with a commitment to aligning client development with the overall organization's culture and operating systems. With experienced and professional experts, we have been operating since 2011 with registration number 86219. Our organization originally specializes in conducting Training, Coaching, Mentorship service, Research, Business support, market linkage, Incubation, and business development services to Institutions, NGOs, Farmer's Groups/ Producer Organisations (POs), Micro, Small and Medium Enterprises (MSMEs). NCCL expanded the range of services to cover Agribusiness Development, Marketing System Development consulting, Transformational/Change management training, and other related activities.
                    </div>
                    <div className='flex space-x-2 pt-8'>
                        <button className="bg-amber-400 text-blue-950 rounded-sm font-bold p-1 px-6 hover:bg-blue-950 hover:text-white hover:transition-all duration-300">Learn More</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 py-8 ">
                    <div className="relative ">
                        <video
                            className="w-full rounded-md h-full object-cover transition-shadow duration-700 "
                            src={img_vid2}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />
                        <h1 className="text-white text-center text-lg w-full absolute rounded-b-md bottom-0 p-2 max-sm:px-2 px-8 bg-[rgba(0,0,0,0.5)] max-sm:text-sm">Morogoro Project Via Nafaka Kilimo | March, 2026</h1>
                    </div>

                    <div className="relative h-64">
                        <img className="w-full h-full object-cover rounded-md" src={picture2} alt="company" />
                        <h1 className="text-white text-center text-lg w-full absolute rounded-b-md bottom-0 p-2 max-sm:px-2 px-8 bg-[rgba(0,0,0,0.5)] max-sm:text-sm">Capacity Building & Training | 2026 </h1>
                    </div>
                    
                    <div className="relative h-64">
                        <img className="w-full h-full contrast-100 brightness-100 object-cover rounded-md" src={picture3} alt="company" />
                        <h1 className="text-white text-center text-lg w-full absolute rounded-b-md bottom-0 p-2 px-8 bg-[rgba(0,0,0,0.5)] max-sm:text-sm max-sm:px-4">Business & Agribusiness Consulting </h1>
                    </div>
                    <div className="relative ">
                        <video
                            className="w-full rounded-md h-full object-cover transition-shadow duration-700 "
                            src={img_vid}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />
                        <h1 className="text-white text-center text-lg w-full absolute max-sm:text-sm max-sm:px-2 rounded-b-md bottom-0 p-2 px-8 bg-[rgba(0,0,0,0.5)]">Mbarali Project Via Nafaka Kilimo | June, 2026</h1>
                    </div>
                </div>
</section>

<section className='grid justify-between md:grid-cols-2 max-sm:grid-cols-1 py-20 max-sm:py-2 px-4  '>
    <div className="bg-blue-100">
        <img className="w-full h-96 object-cover rounded-md" src={picture1} alt="company" />
    </div>

    <div className='flex flex-col gap-8 max-sm:gap-2 leading-20 max-sm:leading-10 justify-evenly  p-16 max-sm:p-2 bg-blue-100'>
            <div>
                        <h1 className="text-blue-950 text-5xl max-sm:text-2xl">About Us</h1>
                        <div className="py-8 text-lg max-sm:text-sm max-sm:text-justify">
                            Near Consult and Company Limited (NCCL) is a professional Capacity Building, Business, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                        </div>

                    </div>
                    <div className='flex space-x-2 '>
                        <button className="bg-amber-400 text-blue-950 rounded-sm font-bold p-1 px-6 hover:bg-blue-950 hover:text-white hover:transition-all duration-300">Learn More</button>
                        <button className="text-blue-950 hover:bg-blue-950 hover:text-white hover:transition-all duration-300 border-[1px] border-blue-950 rounded-sm p-1 px-6 font-bold">Contact Us</button>
                    </div>
    </div>

            </section>

    <section className='grid grid-cols-3 max-sm:grid-cols-1 gap-8 p-6 max-sm:p-4 py-16 max-sm:py-2'>
                <div className="flex flex-col justify-evenly bg-amber-50 border-[1px] boder-amber-700 items-center w-full space-y-8 shadow-md rounded-md p-16 max-sm:p-4">
                    <TbTargetArrow className="text-7xl text-amber-400" />
                    <h1 className="text-2xl w-full font-bold mb-4 bg-amber-400 text-blue-950 p-2 max-sm:text-lg">Mission</h1>
                    <div className="text-lg text-justify max-sm:text-sm">
                        NCCL’s mission is to empower people and businesses alike through the provision of optimally tailored solutions for their business excellence needs.
                    </div>
                </div>
                <div className="flex flex-col justify-evenly border-[1px]  boder-green-700 bg-green-50 items-center w-full space-y-8 shadow-md rounded-md p-16 max-sm:p-4">
                    <IoIosEye className="text-7xl text-green-700" />
                    <h1 className="text-2xl max-sm:text-lg w-full font-bold mb-4 bg-green-700 text-white p-2">Vision</h1>
                    <div className="text-lg text-justify max-sm:text-sm">
                        NNCCL’s Vision is to be the most reliable and responsible support services to our clients, and committed partners towards growth and continuing success.
                    </div>
                </div>
                <div className="flex flex-col items-center bg-blue-50 border-[1px] boder-blue-700 justify-evenly w-full space-y-8 shadow-lg rounded-md p-10 max-sm:p-4">
                    <TbBulbFilled className="text-7xl text-blue-700" />
                    <h1 className="text-2xl max-sm:text-lg w-full font-bold mb-4 bg-blue-700 text-white p-2">Core Values</h1>
                    <div className="text-lg text-justify">
                        <ul list-disc pl-5 className="grid grid-cols-2 max-sm:text-sm">
                            <li className="flex items-center gap-2 text-amber-400">
                                <MdLibraryAddCheck />
                                <h1 className="text-blue-950">Integrity</h1>
                            </li>
                            <li className="flex items-center gap-2 text-amber-400 ">
                                <MdLibraryAddCheck />
                                <h1 className="text-blue-950">Excellence</h1>
                            </li>
                            <li className="flex items-center gap-2 text-amber-400">
                                <MdLibraryAddCheck />
                                <h1 className="text-blue-950">Connecting</h1>
                            </li>
                            <li className="flex items-center gap-2 text-amber-400">
                                <MdLibraryAddCheck />
                                <h1 className=" text-blue-950">Customer Care</h1>
                            </li>
                            <li className="flex items-center gap-2 text-amber-400">
                                <MdLibraryAddCheck />
                                <h1 className=" text-blue-950">Creativity</h1>
                            </li>
                            <li className="flex items-center gap-2 text-amber-400">
                                <MdLibraryAddCheck />
                                <h1 className="text-blue-950">Confidentiality</h1>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </section>

{/*************************************Our SERVICES****************************************/}
<section className='flex flex-col max-w-6xl mx-auto py-8 space-y-8 max-sm:p-4 max-sm:py-2  items-center'>
    <div className='flex flex-col items-center space-y-8 max-sm:py-2 max-sm:space-y-2'>
        <h1 className='text-5xl max-sm:text-2xl'>Our Services</h1>
        <h2 className='text-xl max-sm:text-lg'>From Quality we have welcome</h2>
    </div>
    <Ourservice />
</section>
<section>
    <Cardmission />
</section>

<section className='p-8 max-sm:p-0 max-sm:text-sm' >
    <div className=''>
        <h1 className='text-5xl text-center py-16 max-sm:py-2 max-sm:text-2xl'>Stories from the Ground</h1>
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:p-4 gap-8 max-sm:gap-2">
            <div className="relative py-8">
                <Stories />
            </div>

        <div className='grid md:grid-cols-2 gap-8 max-sm:gap-2 py-8 max-sm:py-2 flex-wrap'>
            {News.map((items) => (
                <div key={items.id} className="w-full">
                    <Newscard id={items.id} date={items.date} year={items.year} title={items.title} description={items.description} photo={items.photo} />
                </div>
            ))}
        </div>   
</div>
     
</div>
</section>

{/*.............................Partners Section..........................*/}
<div className='flex flex-col p-16 max-sm:text-sm bg-blue-50'>
    <div className="flex flex-col items-center justify-center w-full pb-16">
                    <h1 className='text-5xl py-4'>Our Partners</h1>
        <h1 className="">Grateful for the support of our valued partners.</h1>
    </div> 

<div className='grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-center max-sm:items-center space-x-4 max-sm:gap-2 items-center justify-center w-full' >
    <div className="max-sm:items-center mix-blend-darken max-sm:justify-center">
        <img className='w-64 object-cover rounded-md' src={Logo} alt="company" />
    </div>
    <div className='md:grid md:grid-cols-3 max-sm:grid-cols-2 items-center h-full w-full justify-center gap-4'>
        {Partnerlist.map((items)=>(
            <div>
                <Partner key={items.id} id={items.id} title={items.title} short={items.short} ico={items.ico} />
            </div>
           
        ))}
    </div>
    
    </div>

</div>
{/*Contact Section*/}
            <div className="w-full grid grid-cols-2 max-sm:grid-cols-1">
                <div className="p-16 max-sm:p-2">
                    <form className=" flex flex-col p-8 space-y-8 max-sm:space-y-4 max-sm:p-2">
                        <h1 className="text-5xl">Contact us</h1>
                        <input className="p-2 border-[2px]" type="text" placeholder="Name" />
                        <input className="p-2 border-[2px]" type="email" placeholder="Email" />
                        <textarea className="p-2 border-[2px]  " rows={4} cols={40} placeholder="Message"></textarea>
            <button type="submit" className="bg-blue-950 text-white p-2">Send</button>
        </form>
                </div>
                <iframe className="p-20 max-sm:p-2"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.687812058663!2d33.44437397321713!3d-8.908587491430117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19009ff2fef92bed%3A0xc2eec0055f392c8e!2sFOREST%20MPYA!5e0!3m2!1sen!2stz!4v1771196821919!5m2!1sen!2stz"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps location of Forest Mpya"

  ></iframe>
</div>

           
        </div>
    )

}

export default Home;