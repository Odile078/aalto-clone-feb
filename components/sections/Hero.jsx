import Image from "next/image";
import { BsArrowRight, BsDot } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import MainWrapper from "../wrappers/MainWrapper";
const Hero = () => {
  return (
    <div className="flex flex-col mt-20">
      <div>
        <Image
          src="/images/hero-2.jpeg"
          alt="Hero"
          width={2560}
          height={1113}
          className="-z-10 relative max-w-[1920px] mx-auto w-full object-cover object-center max-h-[640px]"
        />
      </div>
      <div className="order-first bg-black xl:bg-transparent xl:order-last">
        <MainWrapper>
          <div className="px-4 py-6 ml-6 space-y-[1.6rem] text-white bg-black xl:-mt-96 xl:px-10 xl:-ml-10 xl:w-[68rem] max-[640px] lg:w-fit">
            <h2 className="text-[3.6rem] leading-[4.2rem]">
              Aalto student – New Student Guide is here to replace Into
            </h2>
            <p className="text-[2.1rem] leading-[2.5rem] max-w-[91.4rem]">
              The into.aalto.fi contents have been migrated to the Aalto.fi site
              with information and news for students.
            </p>
            <ul className="space-y-2">
              {["Student Guide", "Read the news"].map((e, i) => (
                <li key={i}>
                  <div className="flex items-center">
                    <BsArrowRight className="text-3xl" />
                    <p className="text-[1.8rem] leading-[2.2rem] underline">
                      {e}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <button className="p-2 border border-white rounded-full ">
                <MdArrowBackIosNew className="text-4xl text-white" />
              </button>
              <div className="flex items-center gap-3">
                <button className="flex items-center w-4 h-4 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-full hover:w-8 hover:h-8">
                  <RxDotFilled className="flex-1 text-7xl" />
                </button>
                <button className="flex items-center w-6 h-6 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-full hover:w-5 hover:h-5">
                  <RxDotFilled className="text-6xl " />
                </button>{" "}
                <button className="flex items-center w-4 h-4 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-full hover:w-8 hover:h-8">
                  <RxDotFilled className="text-7xl " />
                </button>{" "}
                <button className="flex items-center w-4 h-4 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-full hover:w-8 hover:h-8">
                  <RxDotFilled className="text-7xl " />
                </button>
              </div>
              <button className="p-2 border border-white rounded-full">
                <MdArrowForwardIos className="text-4xl text-white" />
              </button>
            </div>
          </div>
        </MainWrapper>
      </div>
    </div>
  );
};

export default Hero;
