import { IoIosMenu } from "react-icons/io";

export const MenuBar = () => {
    return (
      <div className="flex justify-center items-center bg-[#d3d3d3] bg-opacity-30 rounded-full p-1.5 hover:bg-opacity-100 cursor-pointer">
      <IoIosMenu size={24} className={'hidden portrait:flex sm:flex'}/>   
      </div>  
    );
};

export default MenuBar;