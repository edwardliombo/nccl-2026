
import picture1 from '../assets/8.jpg'

const About = () => {
    return (
        <section className='grid justify-between md:grid-cols-2 max-sm:grid-cols-1 py-20 max-sm:py-2 px-4  '>
            <div className="bg-blue-100">
                <img className="w-full h-96 object-cover rounded-md" src={picture1} alt="company" />
            </div>

            <div className='flex flex-col gap-8 max-sm:gap-2 leading-20 max-sm:leading-10 justify-evenly  p-16 max-sm:p-2 bg-blue-100'>
                <div>
                    <h1 className="text-blue-950 text-5xl max-sm:text-2xl">About Us</h1>
                    <div className="py-8 text-lg max-sm:text-sm max-sm:text-justify">
                        Near Consult and Company Limited (NCCL) is a professional Capacity Building, Business, Agribusiness and Management Consultancy firm operating in Tanzania since 2011
                    </div>

                </div>
                <div className='flex space-x-2 '>
                    <button className="bg-amber-400 text-blue-950 rounded-sm font-bold p-1 px-6 hover:bg-blue-950 hover:text-white hover:transition-all duration-300">Learn More</button>
                    <button className="text-blue-950 hover:bg-blue-950 hover:text-white hover:transition-all duration-300 border-[1px] border-blue-950 rounded-sm p-1 px-6 font-bold"><a href="#contact">Contact Us</a></button>
                </div>
            </div>

        </section>
    )
}

export default About;