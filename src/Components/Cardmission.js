import {Mission} from './Mission';
import Missioncard from './Missioncard';
const Cardmission=()=>{
    return(
    <section className='flex max-sm:flex-col'>
        {Mission.map((list)=>(
            <div key={list.id} className='flex space-x-4'>
                <Missioncard classNam="bg-red-700" id={list.id} name={list.name} title={list.title} ico={list.ico}/>
            </div>
        ))}
    </section>    

    )

}
export default Cardmission;