import Teamcard from './Teamcard';
import Teamlist from './Teamlist'
const Ourteam = ()=>{
    return(
                <div className='mx-auto p-8 mt-8'>
                    <div>
                        <h1 className='text-2xl text-center font-bold md:pb-5'>Meet Our Team</h1>
                    </div>
                    
                    <div className='flex flex-wrap p-8 gap-8'>
                        {Teamlist.map((list)=>(
                            <div className="w-full sm:w-full lg:w-[30%]">
                                <Teamcard name={list.name} title={list.title} photo={list.photo} />
                            </div>
                    ))}
                    </div>
                    
                    
                </div>
                
    )
}

export default Ourteam;