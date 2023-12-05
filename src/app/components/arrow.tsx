import { useState } from "react";
import { HiArrowSmRight, HiChevronRight } from "react-icons/hi";

interface Prop {
    context: string;
    style?: string;
}

export const ArrowComponent = ({context, style}: Prop) => {

    const [chk, setChk] = useState(false);

    return (
        <div className={`flex pr-5 justify-center items-center cursor-pointer`} onMouseEnter={() => setChk(true)} onMouseLeave={() => setChk(false)}>
            <div className={`w-full flex justify-center items-center ${style}`}>
            <div>{context}</div>
            <HiChevronRight size={18} className={`flex transition-opacity ${chk ? 'opacity-0 hidden' : 'opacity-100'} ease-in-out duration-500 mt-0.5`}/>
            <HiArrowSmRight size={18} className={`flex transition-opacity ${chk ? 'opacity-100' : 'opacity-0 hidden'} ease-in-out duration-500 mt-0.5`}/>
            </div>
        </div>
    );
};

export default ArrowComponent;