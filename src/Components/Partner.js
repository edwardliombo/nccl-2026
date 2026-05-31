
const Partner = ({id, title, short, ico})=>{
    
    return(
        <section  className="w-full h-full">  
            <div className="flex flex-col h-32 mix-blend-darken hover:scale-150 hover:transition-all hover:duration-500 bg-white justify-center items-center text-center relative">
                <img className='w-20  object-contain' src={ico} alt={title} />
            </div>
        </section>
    )
}

export default Partner;