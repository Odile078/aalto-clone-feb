import Image from "next/image";
import { BsArrowRight, BsDot } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import MainWrapper from "../wrappers/MainWrapper";
const Hero = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <Image
          src="/images/hero-2.jpeg"
          alt="Hero"
          width={2560}
          height={1113}
          className="-z-10 relative max-w-[1920px] mx-auto object-cover object-center max-h-96"
        />
      </div>
      <div className="order-first bg-black xl:bg-transparent xl:order-last">
        <MainWrapper>
          <div className="px-4 py-6 ml-6 space-y-5 text-white bg-black xl:-mt-40 xl:px-10 xl:-ml-10 lg:w-fit">
            <h2 className="text-2xl">
              Aalto student – New Student Guide is here to replace Into
            </h2>
            <p>
              The into.aalto.fi contents have been migrated to the Aalto.fi site
              with information and news for students.
            </p>
            <ul>
              {["Student Guide", "Read the news"].map((e, i) => (
                <li key={i}>
                  <div className="flex items-center">
                    <BsArrowRight />
                    <p>{e}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button className="p-2 border border-white rounded-full">
                <MdArrowBackIosNew className="text-white" />
              </button>
              <div className="flex items-center gap-2">
                <BsDot className="text-base " />
                <BsDot className="text-base " />
                <BsDot className="text-4xl " />
                <BsDot className="text-base " />
              </div>
              <button className="p-2 border border-white rounded-full">
                <MdArrowForwardIos className="text-white" />
              </button>
            </div>
          </div>
        </MainWrapper>
      </div>
    </div>
  );
};

export default Hero;
