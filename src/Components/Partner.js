import { useState } from "react";
const Partner = ({id, title, short, ico})=>{
    const [toggle, setToggle]=useState(false)
    
    return(
        <section className="flex flex-col items-center text-center ">
            <div onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} className="md:flex md:flex-col items-center justify-center shadow-lg p-4 h-40  w-48">
                <img width={70}  src={ico} alt={title} />
                <h1  className="text-[10px] hover:transition-opacity font-bold">{toggle?title:short}</h1>
            </div>
        </section>
    )
}

export default Partner;