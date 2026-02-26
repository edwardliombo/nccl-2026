const Projectcard=({id, description})=>{
    return(
        <div className="flex w-64 flex-auto  p-6 h-full cursor-pointer transition duration-150 ease-in-out">
            <div className="">
                {description}
            </div>
        </div>
    )
}

export default Projectcard