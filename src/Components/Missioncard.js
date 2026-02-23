const Missioncard = ({id, name, title, ico})=>{
    
    return(
        <section className="shadow-lg p-16 mt-8">
                <div className='flex pt-8'>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="text-5xl font-bold text-sky-700">{ico} </h1>
                        <h1 className="text-4xl font-bold">{name} </h1>
                        <div>
                            {title}
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Missioncard;