import { useState } from "react";
const Partner = ({id, title, short, ico})=>{
    const [toggle, setToggle]=useState(false)
    
    return(
        <section  onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} className="w-full h-full p-8 my-auto">
            
            <div className="flex flex-col h-full text-center">
                <img src={ico} alt={title} />
                <h1  className="text-[10px] hover:transition-opacity font-bold">{toggle?title:short}</h1>
            </div>

            
        </section>
    )
}

export default Partner;