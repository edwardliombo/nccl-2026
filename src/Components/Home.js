import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FaSquareEnvelope, FaSquarePhone } from 'react-icons/fa6';
import { easeInOut, motion } from 'framer-motion';
import Greetings from './Greetings';
import { PiPlusBold } from 'react-icons/pi';
import Ourteam from './Ourteam';
import Logo from '../assets/logo.jpg'
import {News, Partnerlist} from './Mission';
import Newscard from './Newscard';
import Partner from './Partner';
import { Link } from 'react-router-dom';
import Background from './Background';
import Ourservice from './Ourservice';
import Cardmission from './Cardmission';
import picture1 from '../assets/kitalu.webp'

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
        <div className='mx-auto max-sm:text-sm transition-all duration-1000 text-neutral-950'>
            
            <header className="grid md:grid-cols-2 sm:grid-cols-1  shadow-md bg-[#0B0F19]">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
                className='flex items-center gap-6 max-sm:bg-neutral-900'>
                    <img className=' w-20 max-sm:25' src={Logo} alt='logo'/>
                    <div direction="top"><h1 className='h-full w-full max-sm:bg-neutral-900 text-lg  text-neutral-200 max-sm:text-lg max-sm:text-neutral-200 pr-100'>Near Consult and Company Limited </h1></div>
                </motion.div>
                <ul className="grid md:grid-cols-6 items-center max-sm:text-lg text-neutral-300 justify-center max-sm:bg-black text-center max-sm:text-left max-sm:place-items-start max-sm:text-neutral-400 max-sm:p-8  max-sm:justify-start">
                    <li className="hover:border-blue-700 hover:border-b-[1px] hover:font-bold pl-2 w-24  hover:p-1 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:border-blue-700 hover:border-b-[1px] hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="hover:border-blue-700 hover:border-b-[1px] hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/experience">Experience</Link></li>
                    <li className="hover:border-blue-700 hover:border-b-[1px] hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/team">Team</Link></li>
                    <li className="hover:border-blue-700 hover:border-b-[1px] hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/project">Project</Link></li>   
                    <li className="hover:border-blue-700 hover:border-b-[1px] hover:font-bold pl-2 w-24 hover:p-1 cursor-pointer"><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
            <section className='flex my-auto  md:relative'>
                <Background />
                <motion.div className="absolute  flex flex-col space-y-8 py-20 w-[50%] px-16 h-full">
                    <motion.h1
                     className=' text-6xl max-sm:text-sm text-white'>
                        {displayedText}
                    </motion.h1>
                    <Greetings /> 
                    <button className='md:bg-blue-700 max-sm:bg-blue-700 max-sm:p-2  md:p-2 md:pl-3 md:pr-3 rounded-sm text-white w-32'>Discover More</button>
                </motion.div>
            </section>
<motion.div className='max-sm:text-sm mx-auto p-6 text-justify max-sm:p-0 bg-neutral-950'>

    <motion.ul 
    initial={{opacity:0, y:20}} 
    whileInView={{opacity:1, y:0}}
    exit={{opacity:0, y:-20}}

    transition={{duration:1, ease:easeInOut}}
    className='flex space-x-6 '>
    <div className='flex flex-col w-full max-sm:pt-0'>
        <ul className='grid grid-cols-3 max-sm:flex gap-8 text-white'>
            <li className='flex flex-col items-center space-y-4'>
                <div className='flex items-center justify-center font-bold'>
                    <h1 className='text-3xl'>12</h1>
                    <h1 className='text-3xl'><PiPlusBold/></h1>
                </div>
                <div>Years of Experience</div>
            </li>
            <li className='flex flex-col items-center space-y-4'>
                <div className='flex items-center font-bold'>
                    <h1 className='text-3xl'>100</h1>
                    <h1 className='text-3xl'><PiPlusBold/></h1>
                 </div>
                <div>Project Completed</div>
            </li>
            <li className='flex flex-col items-center space-y-4'>
                <div className='flex items-center font-bold'>
                    <h1 className='text-3xl'>98%</h1>
                </div>
                <div>Client Satisfaction</div>
            </li>
        </ul>
    </div> 
   </motion.ul>
</motion.div>

<section className='mx-auto grid md:grid-cols-2 gap-4 max-sm:grid-cols-1   bg-gray-200'>
    <div className=' space-y-8 max-sm:gap-2 py-20  max-w-6xl mx-auto p-12'>
        <div className='flex md:flex-col max-sm:flex-col space-y-16'>
            <div className='flex flex-col'>
                <h1 className='text-6xl max-sm:text-lg'>About Us</h1>
            </div>
                        
            <p className=' max-sm:p-0 text-justify text-lg leading-relaxed '>
                Near Consult and Company Limited (NCCL) is a professional Capacity Building, Business, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
            </p>
                        <button className="bg-blue-700 text-white w-48 p-2 rounded hover:bg-blue-800 transition duration-300">
                Learn More
            </button>
        </div>               
    </div>
    <div className='relative py-20 p-12'>
<img className="w-full h-96 aspect-auto rounded-md" src={picture1} alt="company" />
    </div>
</section>
{/*************************************Our SERVICES****************************************/}
<section className='flex flex-col max-w-6xl mx-auto py-16 items-center'>
    <div className='flex flex-col items-center space-y-8'>
        <h1 className='text-5xl'>Our Services</h1>
        <h2 className='text-lg'>From Quality we have welcome</h2>
    </div>
    <Ourservice />
</section>
{/*************************************Our SERVICES****************************************/}

<section className='mx-auto md:space-x-6 shadow-lg px-16 p-6 max-sm:p-0 max-sm:text-sm' >
    <h1 className="text-5xl max-sm:text-2xl text-center p-6">Our Project</h1>
    <div className="flex max-sm:flex-col space-x-8">
        {News.map((items) => (
        <div key={items.id} className="w-full rounded-lg">
        <Newscard id={items.id} date={items.date} year={items.year} title={items.title} description={items.description} photo={items.photo} />
        </div>
    ))}
</div>
    
</section>
{/****************Who we are *************************/}

            
<section className='grid md:grid-cols-2 sm:grid-cols-1 p-4 max-sm:p-0 md:mt-16 max-sm:mt-0'>
    <div className='p-12 max-sm:p-8'>
        <h1 className='text-5xl font-bold pb-8 max-sm:pb-4 max-sm:text-lg'>Who Are We</h1>

        <div className="cursor-pointer  max-sm:text-sm text-lg text-justify">
            <div>
                Near Consult and Company Limited (NCCL) is an established Capacity Building, Training,Research, Agribusiness, Business, and Management Consultancy Company in the United Republic of Tanzania with a commitment to aligning client development with the overall organization's culture and operating systems. With experienced and professional experts, we have been operating since 2011 with registration number 86219.
                Our organization originally specializes in conducting Training, Coaching, Mentorship service, Research, Business support, market linkage, Incubation, and business development services to Institutions, NGOs, Farmer's Groups/ Producer Organisations (POs), Micro, Small and Medium Enterprises (MSMEs). NCCL expanded the range of services to cover Agribusiness Development, Marketing System Development consulting, Transformational/Change management training, and other related activities.
            </div>
        </div>
                   
    </div>
</section>

            <section className="flex flex-col px-16 max-sm:px-0 py-16 md:flex-row text-gray-950">
                {/* Left panel */}
                <div className="flex-1 px-20 md:w-96 max-sm:px-6 bg-neutral-950 text-white rounded-l-lg p-6 flex flex-col max-sm:rounded-l-sm justify-center items-start">
                    <motion.h2 initial={{
                        opacity:0, y:20
                    }}
                    
                        whileInView={{
                            opacity:1, y:0
                        }}
                        exit={{
                            opacity: 0, y: -20
                       
                        }}
                        transition={{ duration: 1, easeInOut:easeInOut }}
                    className="text-3xl font-bold mb-4">Mission, Vision & Core Values</motion.h2>

                    <motion.div initial={{
                        opacity: 0, y: 20
                    }}
                        whileInView={{
                            opacity:1, y:0
                        }}
                        exit={{
                            opacity:0, y:-20
                        }}
                        transition={{ duration: 1,  easeInOut: easeInOut, delay:0.3 }}
                        className="mt-6 h-1 w-24 bg-blue-500 rounded"></motion.div>
                </div>

                {/* Right panel */}
                <div className="flex-auto p-12 bg-gray-200 rounded-r-lg">
                    <Cardmission />
                </div>
            </section>
            <section className='flex py-16 px-16 max-sm:p-0 max-sm:gap-2 gap-12 max-sm:flex-col'>
                <div className='w-full h-18 border-l-8 max-sm:p-2 flex-1 p-6 rounded-l-lg bg-gray-200 border-neutral-950'>
                    <h1 className='text-2xl max-sm:text-lg font-bold '>
                        <span>Primary Geographic Coverage</span>
                    </h1>
                    <p>
                        Our company mostly covers Mbeya, Songwe, Rukwa, Katavi, Njombe, Iringa, Morogoro and Dar es salaam. 
                    </p>
                </div>
                <div className='w-full h-18 max-sm:p-2 flex-1 border-l-8 p-6 rounded-l-lg bg-gray-200 border-blue-700'>
                    <h1 className='text-2xl max-sm:text-lg font-bold '>
                        <span>Coming Coverage</span>
                    </h1>
                    <p>
                        Dodoma, Singida and Manyara
                    </p>
                </div>
                
            </section>
  
<section className='max-sm:text-sm'>
    <Ourteam/>
</section>


{/*.............................Partners Section..........................*/}
<div className='flex flex-col p-16 max-sm:text-sm'>
    <div className="flex flex-col items-center justify-center w-full pb-16">
        <h1 className="font-bold text-2xl max-sm:text-lg">Partners</h1>
        <h1 className="">Grateful for the support of our valued partners.</h1>
    </div>
    <div className='md:grid md:grid-cols-5 max-sm:grid-cols-2 items-center h-full w-full justify-center gap-8'>
        {Partnerlist.map((items)=>(
            <div className='shadow-md w-full my-auto h-full p-4 items-baseline justify-end'>
             <Partner key={items.id} id={items.id} title={items.title} short={items.short} ico={items.ico} />
            </div>
        ))}
    </div>
</div>

{/*Contact Section*/}
<div className="w-full h-[450px]">
  <iframe
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

            <section className='flex flex-wrap gap-8 bg-neutral-900 text-white'>
                <div className='flex-1 p-8'>
                    <h1 className='text-2xl font-bold text-white'>Contact Us:</h1>
                    <div>
                        <div>
                        <ul className='pt-8'>
                            <li className="md:flex gap-4 items-center">
                                <FaSquarePhone />
                                <h1>+255 754 672055 / +255 715 672055 </h1>
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <FaSquareEnvelope />
                                <h1>nearconsult@yahoo.com </h1>
                            </li>
                        </ul>
                    </div>

                    </div>
                    
                </div>
                {/*2*/}
                <div className='flex-1 p-8'>
                    <h1 className='text-2xl font-bold text-white'>Our Services:</h1>
                    <div>
                        <div>
                        <ul className='pt-8'>
                            <li>Research & Business Support</li>
                            <li>Capacity Building & Training</li>
                            <li>Agribusiness Development</li>
                            <li>Project Management</li>
                            <li>ICT/IT Solutions</li>
                        </ul>
                    </div>

                    </div>
                    
                </div>
                {/*3*/}
                <div className='flex-1 p-8'>
                    <h1 className='text-2xl font-bold text-white'>Social Media:</h1>
                    <div>
                        <div>
                        
                        <ul className='pt-8 flex text-5xl'>
                            <li className="items-center">
                                <FaWhatsappSquare />
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <FaFacebookSquare />
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <FaInstagramSquare />
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <FaYoutubeSquare />
                            </li>
                        </ul>
                    </div>

                    </div>
                    
                </div>
            </section>
        </div>
    )

}

export default Home;