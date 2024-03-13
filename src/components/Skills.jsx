import Marquee from "react-fast-marquee";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-neutral-200">

      <div className="w-[50%] flex flex-col">
        <div className="flex space-y-2 flex-col text-center mb-14">
          <span className="text-5xl font-bold">
            Skils
          </span>
          <span className="text-2xl">
           These are the skills i learned
          </span> 
        </div>

        <Marquee autoFill pauseOnHover>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer ">
            <AiFillHtml5/>
          </div>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white-400">
            <IoLogoCss3/>
          </div>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white-400">
            <IoLogoJavascript/>
          </div>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white-400">
            <FaReact/>
          </div>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white-400">
            <SiTailwindcss/>
          </div>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white-400">
            <BsBootstrapFill/>
          </div>
          <div className="bg-black m-1 flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white-400">
            <FaWordpress/>
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Skills