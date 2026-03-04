const Newscard = ({ id, date, year, title, description, photo})=>{
    return(
 <div className="md:grid md:grid-cols-1">
        <div className='relative'>
            <img className="w-full h-80 object-cover" src={photo} alt="company" />
            <div className="flex flex-col items-center justify-center bg-red-700 absolute font-bold text-white p-2 top-0 left-6">
                <h1>{date} </h1>
                <h1>{year} </h1> 
            </div>
        </div>
        
        <div className='flex flex-col p-8 w-full h-80 justify-between  gap-4 bg-gray-200 '>
            <h1 className='text-2xl font-bold'>{title} </h1>
            <div className="flex-grow bg-gray-200">
                {description}
            </div>
            <button className='bg-black w-32 self-end text-white p-1 rounded-full px-6 mt-auto'>Read More</button>
        </div>
        
    </div>

    )
   
}

export default Newscard;