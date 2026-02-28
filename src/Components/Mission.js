import { BsEye } from "react-icons/bs";
import { FaLock, FaRegStar } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";
import { IoShareSocial } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { MdPalette} from "react-icons/md";
import { PiHandshakeDuotone } from "react-icons/pi";
import picture1 from '../assets/Picture1.jpg'
import picture2 from '../assets/Picture2.png'
import picture8 from '../assets/Picture8.png'
import picture7 from '../assets/Picture7.png'

const Mission=[
    {
        id:1,
        name:"Mission",
        title:"NCCL’s mission is to empower people and businesses alike through the provision of optimally tailored solutions for their business excellence needs.",
        ico:<GiTargetArrows />
    },
    {
        id:2,
        name:"Vision",
        title:"NCCL’s Vision is to be the most reliable and responsible support services to our clients, and committed partners towards growth and continuing success.",
        ico:<BsEye />
    }
]

const Core=[
    {
        id:1,
        name:"Integrity ",
        title:"We put high importance on personal & corporate INTEGRITY. ",
        ico:<LuShield />
    },
    {
        id:2,
        name:"Excellence ",
        title:"We have a culture of continuously striving for EXCELLENCE & for the best in everything we do.",
        ico:<FaRegStar />
    },
    {
        id:3,
        name:"Connecting",
        title:"We are constantly CONNECTING with ourselves, with other people, businesses & networks.",
        ico:<IoShareSocial />
    },
    {
        id:4,
        name:"Customer Care ",
        title:"We have committed staff, partners, stakeholders who believes that QUALITY CUSTOMER SERVICE starts with me.",
        ico:<PiHandshakeDuotone />
    },
    {
        id:5,
        name:"Creativeness ",
        title:"Our CREATIVE staff will lead you to pure satisfactions.",
        ico:<MdPalette />
    },
    {
        id:6,
        name:"Confidentiality ",
        title:"We pride ourselves in providing our clients with a professional service, guaranteed accuracy, and the highest level of CONFIDENTIALITY",
        ico:<FaLock />
    }
]

const Project =[
    {
        id:1,
        description:"Training and capacity building on Agri-business development, Governance, Market System Development, Financial Management, Leadership, and Project Planning.",
    },
    {
        id:2,
        description:"Research and consultancy in Agri-business, Business, Cross Border trade, Management and policies",
    },
    {
        id:3,
        description:"To provide corporate restructuring, strategic planning, strategic management, culture transformation and change management consulting services",
    },
    {
        id:4,
        description:"Training and capacity building on Agri-business development, Governance, Market System Development, Financial Management, Leadership, and Project Planning.",
    },
    {
        id:5,
        description:"Capacity Building on Arbitration and Market Actor Brokerage Service",
    },
    {
        id:6,
        description:"Training in culture transformation, sales, customer service, team building, leadership and planning",
    },
    {
        id:7,
        description:"Preparation of Business Plan, Strategic Plan, Financial regulation, Scheme of Service, Human Resource Management and Administration Manuals.",
    },
    {
        id:8,
        description:"Preparation and implementation of Action Plan, Marketing Plan, Career Development plan and Corporate Strategic Plan and Business Plan.",
    },
    {
        id:2,
        description:"Research/study and/or survey",
    }

]

const News = [
        {
        id:'1',
        date:'2025 - 2028',
        year:'',
        title:'Capacity Building',
        description:`Capacity building through training to beneficiaries Lead
Farmers, project staff and Village Agricultural
Extension Officers who were working in the project
intervention villages and wards of the Inclusive Rice
Value Chain project under Nafaka Kilimo
Implementation`,
        photo:picture2
    },    
    {
        id:'2',
        date:'Jan - Jul',
        year:'2025',
        title:'Mentorship and Coaching',
        description:`Capacity building through training to beneficiaries Lead
Farmers, project staff and Village Agricultural
Extension Officers who were working in the project
intervention villages and wards of the Inclusive Rice
Value Chain project under Nafaka Kilimo
Implementation`,
        photo:picture8
    },
    {
        id:'3',
        date:'Jan - Jul',
        year:'2026',
        title:'Mentorship and Coaching',
        description:'Mentorship and Coaching Programme for youth and women',
        photo:picture7
    },


]
export {Mission, Core, Project, News};