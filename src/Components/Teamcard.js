
const Teamcard =({name, title, photo})=>{
    return(
         <div className='flex gap-4 w-[15%] shadow-lg p-4 rounded-md flex-auto'>
            <div className='flex flex-col justify-around'>
                <img className='w-full h-[60%] object-cover rounded-md' src={photo} alt='pic3' />
                <h1 className='text-md  font-bold'>{name}</h1>
                <p>{title} </p>
            </div>
        </div>
    )
}
export default Teamcard;