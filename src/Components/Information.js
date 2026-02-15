import picture1 from '../assets/Picture1.jpg'
import picture2 from '../assets/Picture2.png'
import picture3 from '../assets/Picture3.png'
import picture4 from '../assets/Picture4.png'
import { useEffect, useState } from 'react';
import List from './List';
const Information =()=>{
    const[images, setImages]=useState(0)
    const[text, setText]=useState(0)
    const photos = [picture1, picture2, picture3, picture4];

    const infoArray = [
    
    {
        title:"Who we Are",
        description:"Near Consult and Company Limited (NCCL) is an established Research, Business and Management Consultancy, Capacity Building and Training Company in the United Republic of Tanzania with a commitment to align client development with the overall organisation culture and operating systems. With experienced and professional experts’ we‘ve been operating since 2011. Our organization originally specializes in conducting Research, Business support and business development services to Institutions, NGO’s, Farmers Groups/ Producer Organisation (PO’s), Micro, Small and Medium Enterprises (SME’s). We expanded our range of services to cover Agribusiness Development, Marketing System Development consulting, Transformational/Change management training and other related activities."
    },
    {
        title:"We are able to provide the following services",
        description:<List lista='To provide corporate restructuring' listb='Strategic Planning' listc='Strategic Management' listd='Culture Transformation and change management consulting services' liste='To provide training in culture transformation sales' listf='Customer Service' listg='Team Building' listh='Leadership and Planning' />
    },
     {
        title:"Functions/Business Overview of the Near Consult & Co. Ltd",
        description:
        <List lista='Our key team of consultants has many years of experience in Capacity Building' listb='Research and other activities including Planning' listc='Finance, Marketing & ' listd='Business Management' liste='Agri-business' listf='Public Relations' listg='Sales and Business Development' listh='ICT/IT and Corporate Restructuring.' />
    }
   
]

    useEffect(()=>{
        const interval=setInterval(()=>{
            setImages(prev=>(
                prev===photos.length-1?0:prev+1
            ))
            setText(txt=>(
                txt===infoArray.length-1?0:txt+1
            ))
        },10000)
        return () => clearInterval(interval);

    },[infoArray.length, photos.length]);
    return(
        
        <section className='md:flex md:mt-16 h-full'>
            <div className='bg-red-700 text-white p-8 rounded-l-md ml-1'>
                <h1 className='text-2xl font-bold pb-8'>{infoArray[text].title} </h1>
                
                    {infoArray[text].description}
                
            </div>
            <div>
                
            </div>
            <img className='flex-1 object-cover mr-1 rounded-r-md' src={photos[images]} alt={photos[images]}/>
        </section>
    )

}
export default Information;