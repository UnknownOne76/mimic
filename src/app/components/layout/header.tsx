"use client";
import ArrowComponent from "../arrow";
import MenuBar from "../menu";

export const Header = () => {
  const sections = [
    "stripe",
    "Products",
    "Solutions",
    "Developers",
    "Resources",
    "Pricing",
  ];

  return (
    <div className="w-full flex justify-center items-center p-2 pl-10 portrait:pl-0 sm:justify-end md:0 xl:pl-48">
      <div className="w-full flex items-center justify-center pl-40 portrait:pl-0 portrait:justify-start sm:justify-start sm:pl-0 md:pl-0">
        {sections.map((x, i) => {
          return <div key={i} className={`${i === 0 ? 'text-2xl font-bold cursor-pointer hover:opacity-[0.5] portrait:flex sm:flex' : 'text-sm hover:opacity-[0.5] cursor-default font-medium portrait:hidden sm:hidden md:flex xl:flex'} pl-8 p-0.5 m-1 transition-opacity`}>{x}</div>;
        })}
      </div>
      <div className="w-full flex items-center justify-center p-2">
        <div className="w-2/4 flex justify-end portrait:flex sm:flex md:flex xl:hidden md:justify-start sm:justify-end">
        <MenuBar />
        </div>
        <ArrowComponent context="Contact sales" style={"hover:opacity-50 portrait:hidden sm:hidden md:hidden xl:flex"}/>
        <ArrowComponent context="Sign in" style={'bg-[#d3d3d3] bg-opacity-30 rounded-full p-1.5 w-[7vw] hover:bg-opacity-100 portrait:hidden sm:hidden md:hidden xl:flex'}/>
        </div>
      </div>
  );
};

export default Header;
