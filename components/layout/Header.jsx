import { IoLockClosedSharp } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineGlobal } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between px-4 mx-auto bg-white border-b border-black max-w-7xl lg:px-20">
      <div className="py-4 space-y-2 transition-all duration-700 group">
        <p className="text-4xl font-bold transition-all duration-700 group-hover:text-base">
          A<span className="group-hover:hidden">?</span>
          <span className="hidden group-hover:inline-block">&quot;</span>
        </p>
        <p className="text-xs font-bold">Aalto university</p>
      </div>
      <nav className="flex gap-4">
        <ul className="flex items-center gap-16">
          <li className="items-center hidden gap-2 lg:flex">
            <IoLockClosedSharp className="text-sm" />
            <p>For personnel Support us</p>
          </li>
          <li className="items-center hidden gap-2 lg:flex">
            <AiOutlineHeart className="text-sm" />
            <p>Support us</p>
          </li>
          <li className="h-[2.6rem] bg-black w-px"></li>
          <li className="items-center hidden gap-2 lg:flex">
            <div className="flex items-center gap-2 ">
              <AiOutlineGlobal />
              <p>EN</p>
              <MdKeyboardArrowUp />
            </div>
          </li>
          <li className="flex items-center gap-2">
            <FiSearch />
            <p>Search</p>
          </li>
          <li className="flex items-center gap-2">
            <BiMenu />
            <p>Menu</p>
          </li>
          <li className="items-center hidden gap-2 lg:flex">
            <Link
              href="/"
              className="block px-8 py-2 text-base text-white bg-black rounded-3xl hover:bg-yellow-300 hover:text-gray-900 "
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
