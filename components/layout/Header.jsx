import { IoLockClosedSharp } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { MdClose, MdKeyboardArrowUp } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import questionLogo from "../../public/images/question-logo.PNG";
import commaLogo from "../../public/images/comma-logo.PNG";
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
    <header>
      <div className="fixed z-30 flex justify-between w-full px-3 mx-auto bg-white border-b border-black max-w-7xl lg:px-20">
        <div
          className={`space-y-px transition-all duration-300 group ${
            pageIsScrolled ? "py-1" : "py-4"
          }`}
        >
          <Image
            width={98}
            height={69}
            src={questionLogo}
            alt="logo"
            className={`transition-all duration-300 group-hover:hidden ${
              pageIsScrolled ? "h-8 w-10" : ""
            }`}
          />
          <Image
            src={commaLogo}
            alt="logo"
            width={98}
            height={69}
            className={`transition-all duration-300 hidden group-hover:block  ${
              pageIsScrolled ? "h-8 w-10" : ""
            }`}
          />
          {/* <p
            className={` font-bold transition-all duration-700 ${
              pageIsScrolled ? "text-base" : "text-5xl "
            } `}
          >
            A<span className="group-hover:hidden">?</span>
            <span className="hidden group-hover:inline-block">&quot;</span>
          </p>
          <p className="text-xs font-bold">Aalto university</p> */}
        </div>
        <nav className="flex gap-4">
          <ul className="items-center hidden gap-10 py-px lg:flex">
            <li className="">
              <Link
                href="/"
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                <IoLockClosedSharp className="text-sm" />
                <p className="text-base leading-[19px]">For personnel</p>
              </Link>
            </li>
            <li className="">
              <Link
                href="/"
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                <AiOutlineHeart className="text-sm" />
                <p className="text-base leading-[1.9rem]">Support us</p>
              </Link>
            </li>
            <li className="h-[2.6rem] bg-black w-px"></li>
            <li className="">
              <Link href="/" className="block p-1 hover:bg-brandGray-light">
                {" "}
                <div className="flex items-center gap-2 ">
                  <AiOutlineGlobal />
                  <p className="text-base leading-[1.9rem]">EN</p>
                  <MdKeyboardArrowUp />
                </div>
              </Link>
            </li>
            <li className="">
              <Link
                href="/"
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                {" "}
                <FiSearch />
                <p className="text-base leading-[1.9rem]">Search</p>
              </Link>
            </li>
            <li className="">
              <button
                onClick={handleOpenMenu}
                className="flex items-center gap-2 p-1 hover:bg-brandGray-light"
              >
                {menuIsOpen ? (
                  <div>
                    <MdClose />
                  </div>
                ) : (
                  <BiMenu />
                )}

                <p className="text-base leading-[1.9rem]">
                  {menuIsOpen ? "Close Menu" : "Menu"}
                </p>
              </button>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="/"
                className="block px-8 py-2 text-base leading-[1.8rem] text-white bg-black rounded-3xl hover:bg-yellow-300 hover:text-gray-900 "
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
          <div className="fixed top-0 right-0 z-10 grid w-screen h-screen mx-auto bg-black bg-opacity-50 m ">
            <div className="w-[80%] bg-white right-0 fixed">
              <div className="relative h-screen overflow-y-auto">
                {/* <div
                  onClick={handleOpenMenu}
                  className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0 group"
                >
                  <MdClose className="text-4xl duration-700 ease-in-out transform group-hover:rotate-180 rotate-icon " />
                </div> */}
                <div className="">
                  <div className="flex flex-col justify-between cursor-pointer pt-52 px-36">
                    {[
                      "Admissions and applying",
                      "News and events",
                      "Research and art",
                      // "For students",
                      // "Schools and departments",
                      // "Tools",
                      // "About us",
                      // "Collaboration",
                      ,
                    ].map((e, i) => {
                      return (
                        <Link
                          key={i}
                          href={e}
                          className="border-b hover:bg-brandGray-light border-brandBlack "
                        >
                          <div className="flex justify-between py-4 h-fit ">
                            <p className="text-[24px] leading-[30px] whitespace-nowrap font-semibold">
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

export default Header;