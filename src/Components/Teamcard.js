
const Teamcard =({name, title, photo})=>{
    return(
         <div className='flex lg:w-[100%] sm:w-full h-full shadow-lg p-4 rounded-md'>
            <div className='flex flex-col justify-around'>
                <img className='w-full h-full sm:w-full object-cover rounded-md' src={photo} alt='pic3' />
                <h1 className='text-md  font-bold'>{name}</h1>
                <p>{title} </p>
            </div>
        </div>
    )
}
export default Teamcard;