import { FaCheckCircle } from "react-icons/fa";

const List =({lista, listb, listc, listd, liste, listf, listg, listh})=>{
    return(
        <ul className="text-lg">
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{lista} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{listb} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{listc} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{listd} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{liste} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{listf} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{listg} </h1>
        </li>
        <li className="md:flex gap-4 items-center">
            <FaCheckCircle />
            <h1>{listh} </h1>
        </li>
    </ul>
    )
    

}

export default List;