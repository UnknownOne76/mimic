"use client";
import ArrowComponent from "./arrow";

interface Prop {
    title: string;
    text: string;
}

export const LandingPage = ({title, text}: Prop) => {
    return (
        <div className="w-full flex flex-col justify-start mt-10 pl-56 pt-32 portrait:pl-8 sm:pl-12 md:pl-20 xl:pl-56">
           <div className="w-[55%] text-8xl font-bold antialiased tracking-tighter portrait:text-5xl portrait:w-[90%] sm:text-5xl sm:w-[50%] md:text-7xl md:w-[50%] xl:w-[55%] xl:text-8xl">
              {title}
           </div>
           <div className="w-[43%] text-xl pt-10 opacity-[0.8] portrait:w-[75%] md:w-[40%] xl:w-[42%]">
              {text}
           </div>
           <div className="flex m-2 pt-5">
              <ArrowComponent context="Start now" style={"bg-[#0a2540] text-white rounded-full p-1.5 hover:bg-opacity-50 p-1 portrait:w-[40vw] md:w-[15vw] lg:w-[12vw] xl:w-[9vw]"}/>
              <ArrowComponent context="Contact sales" style={"hover:opacity-50 portrait:w-[40vw] sm:w-[20vw] md:w-[20vw] xl:w-[10vw]"}/>
           </div>
        </div>
    );
};

export default LandingPage;