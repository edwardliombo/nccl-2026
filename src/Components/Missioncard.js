const Missioncard = ({id, name, title, ico})=>{
    
    return(
        <section className="w-full h-full">
                <div className=''>
                    <div className="flex flex-col items-center justify-center gap-8 ">
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