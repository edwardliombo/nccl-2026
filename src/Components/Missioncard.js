const Missioncard = ({id, name, title, ico})=>{
    
    return(
        <section className="flex flex-col flex-1 shadow-lg p-8 mt-8 w-[25%] h-96">
                <div className='flex pt-4'>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-5xl font-bold text-sky-700">{ico} </h1>
                        <h1 className="text-2xl font-bold">{name} </h1>
                        <div>
                            {title}
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Missioncard;