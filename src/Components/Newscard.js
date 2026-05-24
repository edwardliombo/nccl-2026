const Newscard = ({ id, date, year, title, description, photo})=>{
    return(
 <div className="md:grid md:grid-cols-1 space-y-2  max-sm:p-6 rounded-lg hover:translate-y-1.5 duration-300 ">
        <div className='relative h-56'>
            <img className="w-full h-full object-cover" src={photo} alt="company" />
            <div className="flex flex-col h-14 w-28 text-sm items-center justify-center bg-amber-400 absolute font-bold text-blue-950 p-2 top-0 left-6">
                <h1>{date} </h1>
                <h1>{year} </h1> 
            </div>
        </div>
        
        <div className='flex flex-col w-full  max-sm:h-56  justify-between gap-4'>
            <h1 className='text-2xl max-sm:text-lg font-bold'>{title} </h1>
            <div className="line-clamp-3">
                {description}
            </div>
            <button className='bg-blue-950  hover:font-bold hover:text-sm hover:transition-all duration-300 w-32 hover:bg-amber-500 text-white p-1 rounded-sm px-6 mt-auto'>Read More</button>
        </div>
        
    </div>

    )
   
}

export default Newscard;