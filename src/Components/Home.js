import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa';
import video from '../assets/2876087-hd_1920_1080_30fps.mp4'
import { useEffect, useState } from 'react';
import { MdAgriculture} from 'react-icons/md';
import { FaSquareEnvelope, FaSquarePhone } from 'react-icons/fa6';
import { easeInOut, motion } from 'framer-motion';
import Greetings from './Greetings';
import { PiPlusBold } from 'react-icons/pi';
import {BiBriefcase } from 'react-icons/bi';
import Ourteam from './Ourteam';
import Logo from '../assets/logo.jpg'
import Missioncard from './Missioncard';
import {Mission, Core, News, Partnerlist} from './Mission';
import { GiTeacher } from 'react-icons/gi';
import Marquee from 'react-fast-marquee';
import Newscard from './Newscard';
import Partner from './Partner';

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
        <div>
            <header className="grid md:grid-cols-2 sm:grid-cols-1 md:p-8 shadow-md">
                <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
                className='flex items-center gap-4 pr-8 max-sm:bg-red-700'>
                    <img className=' w-20 max-sm:25' src={Logo} alt='logo'/>
                    <Marquee direction="right max-sm:invisible"><h1 className='max-sm:bg-red-700 text-lg font-extrabold text-red-700 max-sm:text-red-700 pr-8'>NEAR CONSULT AND COMPANY LIMITED </h1></Marquee>
                </motion.div>
                
                <ul className="grid md:grid-cols-6 items-center justify-center max-sm:bg-black max-sm:
                place-items-start max-sm:text-white max-sm:p-8 max-sm:items-center max-sm:justify-start">
                    <li className="font-bold hover:text-red-700 cursor-pointer">Home</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">About</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">Experience</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">Team</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">Project</li>   
                    <li className="font-bold hover:text-red-700 cursor-pointer">Contact</li>
                </ul>
            </header>
            
            <section className='flex items-center justify-center md:w-full md:h-full md:relative'>
                <video className='w-full object-cover brightness-50'  src={video} autoPlay loop muted ></video>
                <div className="absolute flex flex-col gap-8 items-center">
                    <motion.h1
                     className=' font-bold text-5xl max-sm:text-sm text-white'>
                        {displayedText}
                    </motion.h1>
                    <motion.div className='max-sm:text-sm text-xl text-center text-white p-4 max-sm:p-0 px-48'><Greetings /> </motion.div>
                    <button className='md:bg-red-700 max-sm:bg-red-700 max-sm:p-2  md:p-2 md:pl-3 md:pr-3 rounded-sm text-white'>Discover More</button>
                </div>
            </section>

            <section className='grid md:grid-cols-2 max-sm:grid-cols-1 p-4 max-sm:p-0 max-sm:pt-2 max-sm:pb-2 pb-0 gap-4 bg-gray-200'>
                <div className='grid md:grid-cols-2 max-sm:grid-cols-1 items-center gap-8 max-sm:gap-2'>
                    <div className='p-8'>
                        <div className='flex flex-col'>
                            <h1 className='text-5xl max-sm:text-2xl pb-8 font-bold max-sm:pb-4'>About Us</h1>
                        </div>
                        
                        <p className=' max-sm:p-0 text-justify '>
                            Near Consult and Company Limited (NCCL) is a professional Capacity Building, Business, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                        </p>
                    </div>
                    <div className='flex flex-col w-full p-8 max-sm:pt-0'>
                        <ul className='grid grid-cols-1 max-sm:flex gap-4'>
                            <li className='flex flex-col'>
                                <div className='flex items-center font-bold'>
                                    <h1 className='text-3xl'>12</h1>
                                    <h1 className='text-3xl'><PiPlusBold/></h1>
                                </div>
                                <div>Years of Experience</div>
                            </li>
                            <li>
                                <div className='flex items-center font-bold'>
                                    <h1 className='text-3xl'>100</h1>
                                    <h1 className='text-3xl'><PiPlusBold/></h1>
                                </div>
                                <div>Project Completed</div>
                            </li>
                            <li>
                                <div className='flex items-center font-bold'>
                                    <h1 className='text-3xl'>98%</h1>
                                </div>
                                <div>Client Satisfaction</div>
                            </li>
                        </ul>
                    </div> 
                </div>

                <div className='md:flex md:flex-col max-sm:p-8 p-4 flex-auto gap-4'>
                    <h1 className='text-5xl max-sm:text-2xl font-bold max-sm:pb-4'>Our Services</h1>
                    <div className='flex justify-between max-sm:gap-4'>
                        <div>
                            <h1 className='text-7xl text-sky-700 font-extrabold'><BiBriefcase/> </h1>
                            <div className='font-bold'>
                                Research & Business Support
                            </div>
                        </div>
                        <div>
                            <h1 className='text-7xl text-green-600 font-extrabold'><MdAgriculture /></h1>
                            <div className='font-bold'>
                                Agribusiness Development
                            </div>
                        </div>
                        <div>
                            <h1 className='text-7xl text-red-600 font-extrabold'><GiTeacher /> </h1>
                            <div className='font-bold'>
                                Training & Capacity Building
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*vission and mission section */}
            <section className='grid md:grid-cols-2 sm:grid-cols-1 p-4 max-sm:p-0 mt-4 max-sm:mt-0'>
                <div className='p-8 max-sm:p-8 shadow-lg'>
                    <h1 className='text-5xl font-bold pb-8 max-sm:pb-4 max-sm:text-2xl'>Who Are We</h1>
                    <details>

<summary className="cursor-pointer font-semibold text-lg text-justify">
      Near Consult and Company Limited (NCCL) is an established Capacity Building, Training, Research, Agribusiness, Business, and Management Consultancy Company in the United Republic of Tanzania with a commitment to aligning client development with the overall organization's culture and operating systems. With experienced and professional experts, we have been operating since 2011 with registration number 86219.
    </summary>
    <div className='text-justify'>
                         Our organization originally specializes in conducting Training, Coaching, Mentorship service, Research, Business support, market linkage, Incubation, and business development services to Institutions, NGOs, Farmer's Groups/ Producer Organisations (POs), Micro, Small and Medium Enterprises (MSMEs). NCCL expanded the range of services to cover Agribusiness Development, Marketing System Development consulting, Transformational/Change management training, and other related activities.
                    </div>
                    

                    </details>
                     
                    
                </div>
                <div className="rounded-md p-4 max-sm:p-0">
                    <div className='justify-center'>
                        <div className='grid md:grid-cols-2 md:gap-8 sm:grid-cols-1'>
                        {Mission.map((list)=>(
                            <div className='w-full h-full p-8 shadow-md'>
                                <Missioncard id={list.id} name={list.name} title={list.title} ico={list.ico}/>
                            </div>
                        ))}
                        </div>

                    
                </div>
                   
            </div>
            </section>
            <section className='flex flex-col items-center '>
                <h1 className='text-2xl font-bold'>Core Values</h1>
                <div className='md:grid md:grid-cols-4 max-sm:grid-cols-2 gap-8 items-center justify-center w-full'>
                    {Core.map((items)=>(
                        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.3, ease:easeInOut}} className=' w-full h-full p-8 shadow-md '>
                        <Missioncard key={items.id} id={items.id} name={items.name} title={items.title} ico={items.ico}/>
                        </motion.div>
                        
                    ))}
                </div>
            </section>
            
            <section className='flex p-8 max-sm:p-0 max-sm:gap-2 gap-12 max-sm:flex-col'>
                <div className='w-full h-full border-l-8 flex-1 p-4 rounded-l-lg bg-gray-200 border-green-700'>
                    <h1 className='text-2xl font-bold '>
                        <span>Primary Geographic Coverage</span>
                    </h1>
                    <p>
                        Our company mostly covers Mbeya, Songwe, Rukwa, Katavi, Njombe, Iringa, Morogoro and Dar es salaam. 
                    </p>
                </div>
                <div className='w-full h-full flex-1 border-l-8 p-4 rounded-l-lg bg-gray-200 border-sky-700'>
                    <h1 className='text-2xl font-bold '>
                        <span>Coming Coverage</span>
                    </h1>
                    <p>
                        Dodoma, Singida and Manyara
                    </p>
                </div>
                
            </section>
  
<section className=''>
    <Ourteam/>
</section>
<section className='p-8 max-sm:p-0' >
    <div className=''>
        <h1 className='text-2xl text-center p-8 font-bold'>News & Events:</h1>
        <div className='md:grid md:grid-cols-3 gap-8 flex-wrap'>
            {News.map((items)=>(
                <div key={items.id} className="w-full">
                <Newscard  id={items.id}  date={items.date} year={items.year} title={items.title} description={items.description} photo={items.photo} />
                </div>
            ))}
            
         </div>        
    </div>
</section>

{/*.............................Partners Section..........................*/}
<div className='flex flex-col p-16'>
    <div className="flex flex-col items-center justify-center w-full pb-16">
        <h1 className="font-bold text-2xl">Partners</h1>
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

            <section className='flex flex-wrap gap-8 bg-black text-white'>
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