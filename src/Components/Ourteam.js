import Teamcard from './Teamcard';
import Teamlist from './Teamlist'
const Ourteam = ()=>{
    return(
                <div className='mx-auto mt-8 max-sm:mt-4'>
                    <div>
                        <h1 className='text-2xl text-center font-bold max-sm:text-lg md:pb-5 max-sm:pb-2'>Meet Our Team</h1>
                    </div>
                    
                    <div className='grid md:grid-cols-4 max-sm:grid-cols-2 p-8 max-sm:p-0 gap-8'>
                        {Teamlist.map((list)=>(
                            <div className="">
                                <Teamcard name={list.name} title={list.title} photo={list.photo} />
                            </div>
                    ))}
                    </div>
                    
                    
                </div>
                
    )
}

export default Ourteam;