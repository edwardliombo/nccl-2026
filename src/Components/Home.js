import { FaExclamationCircle, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaYoutubeSquare } from 'react-icons/fa';
import video from '../assets/vid.mp4'
import { useEffect, useState } from 'react';
import { MdGroups, MdPermContactCalendar } from 'react-icons/md';
import Information from './Information';
import { FaSquareEnvelope, FaSquarePhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';
const Home = ()=>{
      const fullText = "I greet you with sincere love in the partnership for economic growth and the promotion of trade and agribusiness for development. I welcome you to our website, which aims to provide you with important information and news on advice, research and training issues in the fields of trade and agribusiness. On our website, you will find the opportunity to educate yourself through important information, policies, business opportunities, various updated strategies that exist in Tanzania and even abroad. It is my hope that by going through this website, it will awaken the spirit of growing your economy and that of your institution or company. For development stakeholders, they will benefit from getting accurate information about the organization in order to collaborate with them in achieving the goals of their projects. NCCL experience together with qualified experienced professional experts and the excellent work performance of the parties demonstrates how we can fulfill your wishes. I sincerely invite you to get advice and guidance in the fields of trade and agribusiness. For those who find it difficult or difficult to start, do business/agri-business or continue with a business/agri-business, NCCL is the right dowry, “Your success is NEAR”, Your success is NCCL success.....";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

    return(
        <div>
            <header className="md:flex md:justify-between md:p-8 shadow-md">
                <h1 className='text-lg font-extrabold text-red-700'>NCCL</h1>
                <ul className="md:flex md:gap-16">
                    <li className="font-bold hover:text-red-700 cursor-pointer">Home</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">About</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">Experience</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">Team</li>
                    <li className="font-bold hover:text-red-700 cursor-pointer">Project</li>   
                    <li className="font-bold hover:text-red-700 cursor-pointer">Contact</li>
                </ul>
            </header>
            
            <section className='flex items-center justify-center md:mt-4 md:w-full md:h-full md:relative'>
                <video className='w-full object-cover brightness-50'  src={video} autoPlay loop muted ></video>
                <div className="absolute flex flex-col gap-8 items-center">
                    <h1 className='font-bold text-5xl text-white'>Near Consult And Company Limited </h1>
                    <motion.h1 className='text-xl text-white'>{displayedText} </motion.h1>
                    <button className='md:bg-red-700 md:p-2 md:pl-3 md:pr-3 rounded-sm text-white'>Discover More</button>
                </div>
            </section>

            <section className='md:flex p-8 gap-8 md:mt-8'>
                <div className='md:flex md:flex-auto md:flex-col items-center gap-4'>
                    <FaExclamationCircle className='text-5xl'/>
                    <h1 className='text-2xl font-bold'>About Us</h1>
                    <p>
                        Near Consult and Company Limited (NCCL) is a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                    </p>
                </div>
                <div className='md:flex md:flex-2 md:flex-col items-center gap-4'>
                    <MdGroups className='text-5xl'/>
                    <h1 className='text-2xl font-bold'>Our Services</h1>
                    <p>
                        Near Consult and Company Limited (NCCL) is a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                    </p>
                </div>
                <div className='md:flex md:flex-2 md:flex-col items-center gap-4'>
                    <MdPermContactCalendar className='text-5xl'/>
                    <h1 className='text-2xl font-bold'>Contact Us</h1>
                    <p>
                        Near Consult and Company Limited (NCCL) is a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                    </p>
                </div>
            </section>

            <section>
                <Information />
            </section>

            <section className='md:flex p-8  mt-16 gap-8 justify-between'>
                <div className='w-[50%]'>
                    <h1 className='text-2xl font-bold'>News:</h1>
                    <div className='border-b-[1px] border-black'>
                        <div>
                            <h1 className='text-md font-bold'>January 1, 2026</h1>
                            <p>
                                s a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                            </p>
                        </div>
                    </div>
                    
                    <div className='border-b-[1px] border-black'>
                        <div>
                            <h1 className='text-md font-bold'>January 1, 2026</h1>
                            <p>
                                s a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                            </p>
                        </div>
                    </div>
                    <div className='border-b-[1px] border-black'>
                        <div>
                            <h1 className='text-md font-bold'>January 1, 2026</h1>
                            <p>
                                s a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                            </p>
                        </div>
                    </div>
                    <div className='border-b-[1px] border-black'>
                        <div>
                            <h1 className='text-md font-bold'>January 1, 2026</h1>
                            <p>
                                s a professional Capacity Building, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className='w-[50%]'>
                    <h1 className='text-2xl font-bold md:pb-5'>Meet Our Team</h1>
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <img className='w-full object-cover rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kS0vt6AnHtx6AmJPHXQF-CLsis-kndplbA&s' alt='pic3' />
                            <h1 className='text-md font-bold'>Nzenga E. Simbeye</h1>
                            <p>Director</p>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full object-cover rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAn1Rz8HcarqSIhpDsT_7HiFH4VTk38byPwQ&s' alt='pic1'/>
                            <h1 className='text-md font-bold'>Idd Kindamba</h1>
                            <p>Director</p>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full object-cover rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7_cfzWhcYqXBqRqySL10DSaKLzlcXj1oig&s' alt='pic2' /> 
                            <h1 className='text-md font-bold'>William Nsonda</h1>
                            <p>Director</p>
                        </div>
                    </div>
                </div>
            </section>
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

            <section className='flex gap-8 bg-black text-white'>
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
                            <li>Management & Consultancy</li>
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