import nzenga from '../assets/nzenga.jpeg'
import rachel from '../assets/img1.jpeg'
const Ourteam = ()=>{
    return(
                        <div className='mx-auto p-8 w-[50%]'>
                    <h1 className='text-2xl font-bold md:pb-5'>Meet Our Team</h1>
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <img className='w-full object-cover rounded-md' src={nzenga} alt='pic3' />
                            <h1 className='text-md font-bold'>Nzenga Edwin Simbeye</h1>
                            <p>Executive Director</p>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full object-cover rounded-md' src={rachel} alt='pic1'/>
                            <h1 className='text-md font-bold'>Rachel kalengo simkoko</h1>
                            <p>Head of Youth & Women Section</p>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full object-cover rounded-md' src='' alt='pic2' /> 
                            <h1 className='text-md font-bold'>William Nsonda</h1>
                            <p>Director</p>
                        </div>
                    </div>
                </div>
    )
}

export default Ourteam;