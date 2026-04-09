const Missioncard = ({id, name, title, ico})=>{
    
    return(
        <section className="w-full h-full">
                <div className=''>
                    <div className="flex flex-col items-center p-4 justify-center max-sm:gap-4 space-y-6 ">
                        <h1 className="text-5xl max-sm:text-lg bg-gray-950 p-6 rounded-full font-bold text-white">{ico} </h1>
                        <h1 className="text-2xl max-sm:text-lg font-bold">{name} </h1>
                        <div className="max-sm:text-sm">
                            {title}
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Missioncard;