import { AiOutlineHeart, AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { MdClose, MdKeyboardArrowUp } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiMenu, BiLockAlt } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaGraduationCap } from "react-icons/fa";
import { TbFilePencil } from "react-icons/tb";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight, BsFillMenuButtonFill } from "react-icons/bs";
import Image from "next/image";

const Header = () => {
  const [pageIsScrolled, setPageIsScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  useEffect(() => {
    const resize = () => {
      window.pageYOffset > 300
        ? setPageIsScrolled(true)
        : setPageIsScrolled(false);
    };
    window.addEventListener("scroll", resize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen]);
  return (
    <header className="">
      <div className="fixed z-30 flex justify-between w-full px-3 bg-white border-b border-black lg:px-20">
        <div
          className={`space-y-px transition-all duration-400 ease-in-out group ${
            pageIsScrolled ? "py-1" : "py-4"
          }`}
        >
          <Image
            width={98}
            height={69}
            src="/images/question-logo.png"
            alt="logo"
            className={`transition-all duration-300 group-hover:hidden ${
              pageIsScrolled ? "h-8 w-10" : ""
            }`}
          />
          <Image
            src="/images/comma-logo.png"
            alt="logo"
            width={98}
            height={69}
            className={`transition-all duration-300 hidden group-hover:block ${
              pageIsScrolled ? "h-8 w-10" : ""
            }`}
          />
        </div>
        <nav className="flex gap-4">
          <ul className="items-center hidden gap-10 py-px lg:flex">
            <li className="">
              <Link
                href="/"
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                <BiLockAlt className="text-3xl" />
                <p className="text-[1.6rem] leading-[1.9rem]">For personnel</p>
              </Link>
            </li>
            <li className="">
              <Link
                href="/"
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                <AiOutlineHeart className="text-3xl" />
                <p className="text-[1.6rem] leading-[1.9rem]">Support us</p>
              </Link>
            </li>
            <li className="h-[2.6rem] bg-black w-px"></li>
            <li className="">
              <Link href="/" className="block p-1 hover:bg-brandGray-light">
                {" "}
                <div className="flex items-center gap-2 ">
                  <AiOutlineGlobal className="text-3xl" />
                  <p className="text-[1.6rem] leading-[1.6rem]">EN</p>
                  <MdKeyboardArrowUp className="text-3xl" />
                </div>
              </Link>
            </li>
            <li className="">
              <Link
                href="/"
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                {" "}
                <FiSearch className="text-3xl" />
                <p className="text-[1.6rem] leading-[1.9rem]">Search</p>
              </Link>
            </li>
            <li className="">
              <button
                onClick={handleOpenMenu}
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                {menuIsOpen ? (
                  <div>
                    <MdClose className="text-3xl" />
                  </div>
                ) : (
                  <BiMenu className="text-3xl" />
                )}

                <p className="text-[1.6rem] leading-[1.9rem]">
                  {menuIsOpen ? "Close Menu" : "Menu"}
                </p>
              </button>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="/"
                className="block text-[1.6rem] leading-[1.8rem] px-[3.1rem] py-[1rem] text-white bg-black rounded-[2.9rem] hover:bg-yellow-300 hover:text-gray-900 "
              >
                Login
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-4 lg:hidden ">
            <li className="flex items-center gap-2">
              <button>
                <FiSearch />
              </button>
            </li>
            <li className="h-[2.6rem] bg-black w-px"></li>
            <li className="flex items-center gap-2">
              <button onClick={handleOpenMenu} className="text-base">
                Menu
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {menuIsOpen ? (
        <section className="">
          <div className="fixed right-0 z-10 grid w-screen h-screen mx-auto bg-black bg-opacity-50 top-30 ">
            <div className="w-[80%] 2xl:w-[40%] bg-white right-0 fixed">
              <div className="relative h-screen overflow-y-auto">
                <div className="px-4 pt-40 space-y-6 sm:px-36">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <BsFillMenuButtonFill />
                      <p className="text-base leading-[19px]">Services</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <TfiMenuAlt />
                      <p className="text-base leading-[19px]">Site index</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaGraduationCap />
                      <p className="text-base leading-[19px]">Student guide</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <TbFilePencil />
                      <p className="text-base leading-[19px]">Apply to Aalto</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between cursor-pointer ">
                    {[
                      "Admissions and applying",
                      "News and events",
                      "Research and art",
                      "For students",
                      "Schools and departments",
                      "Tools",
                      "About us",
                      "Collaboration",
                      ,
                    ].map((e, i) => {
                      return (
                        <Link
                          key={i}
                          href={e}
                          className="border-b hover:bg-brandGray-light border-brandBlack "
                        >
                          <div className="flex justify-between py-4 h-fit ">
                            <p className="text-[24px] leading-[30px] whitespace-nowrap ">
                              {" "}
                              {e}
                            </p>

                            <AiOutlinePlus className="text-2xl" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </header>
  );
};
// ${
//   menuIsOpen
//     ? "translate-x-[100vw] duration-1000"
//     : "translate-x-[200vw] duration-700"
// }
// `}
// >
// <div
//   className={`fixed right-0 z-10 grid w-screen h-screen mx-auto bg-black bg-opacity-50 top-30 duration-1000 delay-700 ease-in-out origin-right transform ${
//     menuIsOpen ? "-translate-x-[100vw] " : "translate-x-[10vw]"
//   } `}
// >
export default Header;
