
import picture1 from '../assets/kitalu.webp'
import picture2 from '../assets/Picture4.webp'
import picture6 from '../assets/Picture6.webp'
import { GraduationCapIcon, Search, Tractor } from 'lucide-react';
const Ourservice = ()=>{
    const servicenews = [
        {
            id:1,
            description:"We deliver reliable research and strategic support services to help businesses make informed decisions and improve performance. Our team uses data-driven insights to guide growth and innovation.",
            photo:picture1
        },
        {
            id:2,
            description:"We provide innovative and sustainable agribusiness solutions that empower farmers, agripreneurs, and organizations to increase productivity, improve value chains, and achieve long-term growth.",
            photo:picture2
        },
        {
            id:3,
            description:"We offer high-quality training programs aimed at enhancing skills, knowledge, and performance for individuals and organizations. Our sessions are practical, results-driven, and tailored to meet specific client needs.",
            photo:picture6
        }
    ]

const icons = [<Search/>, <Tractor />, <GraduationCapIcon />];
const title = ["Research & Business Support", "Agribusiness Development", "Training & Capacity Building"]
    return(
        <section className='grid grid-cols-3 max-sm:grid-cols-2 gap-6 p-6'>
            {servicenews.map((item, index)=>{
                return(
                    <div key={item.id} className='flex text-white hover:bg-neutral-100 hover:translate-y-1 transition-all rounded-lg duration-300 hover:cursor-pointer hover:text-black flex-col items-center max-sm:items-center  bg-neutral-950 shadow-lg border border-neural-100 p-12 max-sm:p-6 space-y-8 '>
                        <h1 className='flex items-center bg-blue-700 w-16 h-16 p-6 text-center rounded-full text-2xl font-bold'>{icons[index]} </h1>
                        <h1 className='font-bold text-center'>{title[index]} </h1>
                        <div className='text-center line-clamp-3'>
                            {item.description}
                        </div>
                    </div>
                
                )
            })}

        </section>
    )

}

export default Ourservice;
