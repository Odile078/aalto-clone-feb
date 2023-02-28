import { AiOutlineHeart, AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { MdClose, MdKeyboardArrowUp } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiMenu, BiLockAlt } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { TbFilePencil } from "react-icons/tb";
import { BsFillMenuButtonFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
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
            pageIsScrolled ? "py-1 " : " sm:py-4"
          }`}
        >
          <Image
            width={98}
            height={69}
            src="/images/question-logo.png"
            alt="logo"
            className={`transition-all duration-300 group-hover:hidden ${
              pageIsScrolled ? "h-8 w-10" : " h-8 w-10 sm:h-auto sm:w-auto"
            }`}
          />
          <Image
            src="/images/comma-logo.png"
            alt="logo"
            width={98}
            height={69}
            className={`transition-all duration-300 hidden group-hover:block ${
              pageIsScrolled ? "h-8 w-10" : "h-8 w-10 sm:h-auto sm:w-auto"
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
          <div className="fixed right-0 z-10 grid w-screen h-screen mx-auto bg-black bg-opacity-70 top-30 ">
            <div className="w-[80%] 3xl:w-[60%] 4xl:w-[45%] bg-white right-0 fixed">
              <div className="relative h-screen overflow-y-auto">
                <div className="px-4 space-y-6 pt-52 sm:px-36">
                  <div className="flex items-center gap-4">
                    {[
                      {
                        icon: <BsFillMenuButtonFill className="text-5xl" />,
                        title: "Services",
                      },
                      {
                        icon: <BsFillMenuButtonFill className="text-5xl" />,
                        title: "Site index",
                      },
                      {
                        icon: <FaGraduationCap className="text-5xl" />,
                        title: "Student guide",
                      },
                      {
                        icon: <TbFilePencil className="text-5xl" />,
                        title: "Apply to Aalto",
                      },
                    ].map((e, i) => (
                      <Link key={i} href={e?.title}>
                        <div
                          key={i}
                          className="flex flex-col items-center w-[9.6rem]"
                        >
                          {e?.icon}
                          <p className="text-[1.6rem] leading-[1.9rem] text-center">
                            {e?.title}
                          </p>
                        </div>
                      </Link>
                    ))}
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
                        <details
                          key={i}
                          // href={e}
                          className="block border-b border-brandBlack group "
                        >
                          <summary className="flex items-center justify-between p-6 py-4 hover:bg-brandGray-light h-fit ">
                            <p className="text-[24px] leading-[30px] whitespace-nowrap ">
                              {" "}
                              {e}
                            </p>

                            <AiOutlinePlus className="text-3xl" />
                          </summary>
                          <div className="flex flex-wrap p-6 2xl:mr-40">
                            {[
                              "Apply to Aalto",
                              "Find a study programme",
                              "How to apply",
                              "Scholarships and tuition fees",
                              "Bachelor's admissions",
                              "Master's admissions",
                              "Doctoral admissions",
                              "Campus life",
                              "Events for applicants",
                              "Chat with students",
                              "Subscribe to newsletter",
                              "Lifewide Learning",
                              "Contact admission services",
                              "Exchange students",
                            ].map((e, i) => (
                              <Link
                                key={i}
                                href={e}
                                className="p-1 underline hover:bg-brandGray-light lg:w-[29rem]"
                              >
                                <p className="text-[1.8rem] leading-[2.2rem] tracking-[.015rem] py-[1.3rem] px-[1.6rem]">
                                  {e}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </details>
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
