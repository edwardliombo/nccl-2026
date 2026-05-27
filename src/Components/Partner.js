
const Partner = ({id, title, short, ico})=>{
    
    return(
        <section  className="w-full h-full">  
            <div className="flex flex-col h-32 mix-blend-multiply hover:mix-blend-normal bg-white justify-center items-center text-center relative">
                <img className='w-20 mix-blend-multiply  object-contain' src={ico} alt={title} />
            </div>
        </section>
    )
}

export default Partner;