import { FaSquareEnvelope, FaSquarePhone } from 'react-icons/fa6';
import { MdMarkunreadMailbox } from "react-icons/md";

const Footer = () => {
    return (
        <section className='flex flex-wrap gap-8 bg-neutral-900 text-white'>
            <div className='flex-1 p-8'>
                <h1 className='text-2xl font-bold text-white'>Contact Us:</h1>
                <div>
                    <div>
                        <ul className='pt-8 space-y-2'>
                            <li className="md:flex gap-4 items-center">
                                <FaSquarePhone className="text-2xl" />
                                <h1>+255 754 672055 / +255 715 672055 </h1>
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <FaSquareEnvelope className="text-2xl" />
                                <h1>nearconsult@yahoo.com </h1>
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <MdMarkunreadMailbox className="text-2xl" />
                                <h1>P.O. Box 11355, Dar es Salaam, Tanzania </h1>
                            </li>
                            <li className="md:flex gap-4 items-center">
                                <MdMarkunreadMailbox className="text-2xl" />
                                <h1>P.O. Box 2045, Mbeya, Tanzania </h1>
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
                            <li>Capacity Building & Training</li>
                            <li>Research & Business Support</li>
                            <li>Agribusiness Development</li>
                            <li>Project Management</li>
                            <li>ICT/IT Solutions</li>
                        </ul>
                    </div>

                </div>

            </div>
            {/*3*/}
            <div className='flex-1 p-8'>
                <h1 className='text-2xl font-bold text-white'>Useful Links:</h1>
                <ul className='pt-8'>
                    <li><a href="https://www.rikolto.org/" className='text-white hover:underline hover:text-amber-400 hover:transition-all hover:duration-500 hover:pl-2 hover:text-bold' target="_blank" rel="noopener noreferrer">Rikolto</a></li>
                    <li><a href="https://tncc.or.tz/" className='text-white hover:underline hover:text-amber-400 hover:transition-all hover:duration-500 hover:pl-2 hover:text-bold' target="_blank" rel="noopener noreferrer">Tanzania National Chamber of Commerce (TNCC)</a></li>
                    <li><a href="https://www.usaid.gov/" className='text-white hover:underline hover:text-amber-400 hover:transition-all hover:duration-500 hover:pl-2 hover:text-bold ' target="_blank" rel="noopener noreferrer">USSAID</a></li>
                    <li><a href="https://www.tanzania.go.tz/" className='text-white hover:underline hover:text-amber-400 hover:transition-all hover:duration-500 hover:pl-2 hover:text-bold' target="_blank" rel="noopener noreferrer">Government of Tanzania</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;

