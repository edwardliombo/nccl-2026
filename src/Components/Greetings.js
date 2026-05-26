import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
const Greetings = ()=>{
     const animText = useMemo(()=>[
        'I greet you with sincere love in the partnership for economic growth and the promotion of trade and agribusiness for development.',
        'I welcome you to our website, which aims to provide you with important information and news on advice, research and training issues in the fields of trade and agribusiness.',
        'On our website, you will find the opportunity to educate yourself through important information, policies, business opportunities, various updated strategies that exist in Tanzania and even abroad.',
        'It is my hope that by going through this website, it will awaken the spirit of growing your economy and that of your institution or company.',
        'For development stakeholders, they will benefit from getting accurate information about the organization in order to collaborate with them in achieving the goals of their projects.',
        'NCCL experience together with qualified experienced professional experts and the excellent work performance of the parties demonstrates how we can fulfill your wishes.',
        'I sincerely invite you to get advice and guidance in the fields of trade and agribusiness. For those who find it difficult or difficult to start, do business/agri-business or continue with a business/agri-business, NCCL is the right dowry, “Your success is NEAR”, Your success is NCCL success.....'
    ], [])
    const[textNum, setTextNum]=useState(0)
    
    useEffect(()=>{
       const intval= setInterval(() => {
            setTextNum(prev=>(
                prev===animText.length-1?0:prev+1
            ))
    }, 15000);
    return ()=>clearInterval(intval)
    },[textNum, animText])
    return(
        <motion.div  className=' text-white text-lg'
            key={textNum}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            {animText[textNum]}
        </motion.div>
    )

}

export default Greetings;