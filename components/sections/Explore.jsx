import Image from "next/image";
import Link from "next/link";
import explore from "../../public/images/explore.jpeg";
import MainWrapper from "../wrappers/MainWrapper";
import { FaRegFolder } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { TbPencil } from "react-icons/tb";
import SectionHeader from "../ui/SectionHeader";
import ContentCard from "../ui/ContentCard";
import exploreCard1 from "../../public/images/explore-1.jpeg";
import lobbie2 from "../../public/images/explore-2.jpg";
import lobbie from "../../public/images/lobbie.jpeg";
import { BsArrowRight } from "react-icons/bs";
import Community from "./Community";
const Explore = () => {
  return (
    <div className="pt-[7.2rem]">
      <Image
        src={explore}
        alt="Explore background"
        className="relative object-cover object-center w-screen h-96 md:h-[400px] md:max-h-[500px] -z-10"
      />
      <MainWrapper>
        <div className="-mt-[17rem] bg-yellow-400 ">
          <h1 className="p-[2.4rem] pb-16 lg:pb-[8rem] text-[5.6rem] leading-[6.6rem]">
            Explore Aalto University
          </h1>
          <div className="grid grid-cols-1 border-t border-black md:grid-cols-3">
            {["Study at Aalto", "Open positions", "Contact us"].map((e, i) => (
              <div
                key={i}
                className="flex justify-center py-[0.8rem] px-[2.4rem] border-r border-black min-h-[11.2rem] items-center"
              >
                <Link
                  href="/"
                  className="block text-[2.8rem] leading-[3.3rem] text-center underline hover:bg-brandGray-light w-fit"
                >
                  {e}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="my-[7.2rem] space-y-10">
          <h2 className="text-[2.8rem] leading-[3.3rem] text-center">
            important-quicklinks
          </h2>
          <div className="flex flex-col gap-6 w-10/12 sm:w-full px-[1.6rem] md:px-16 max-w-[154rem] mx-auto sm:justify-around sm:flex-row sm:items-center">
            {[
              {
                icon: <TbPencil className="text-7xl" />,
                title: "For personnel",
              },
              {
                icon: <FaRegFolder className="text-7xl" />,
                title: "Aalto Handbook",
              },
              {
                icon: <HiOutlinePhone className="text-7xl" />,
                title: "Safety",
              },
            ].map((e, i) => (
              <Link href="/" key={i} className="group">
                <div className="flex items-center flex-1 gap-3">
                  <div className="p-8 bg-yellow-400 rounded-full">{e.icon}</div>

                  <p className="text-[2.1rem] leading-[2.5rem] group-hover:bg-brandGray-light">
                    {e.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-10 space-y-[2.4rem]">
          <SectionHeader
            title="Explore our six schools"
            description="Scientific research and artistic activities are carried out at six schools and their departments and units."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                img: (
                  <Image
                    src={exploreCard1}
                    alt="card 1"
                    className="order-last object-cover min-h-[160px] object-center h-full group-hover:opacity-70"
                  />
                ),
                title: "School of Arts, Design and Architecture",
                description: "The School of Arts, Design and Architecture...",
              },
              {
                img: (
                  <Image
                    src={exploreCard1}
                    alt="card 1"
                    className="order-last object-cover min-h-[160px] object-center h-full group-hover:opacity-70"
                  />
                ),
                title: "School of Arts, Design and Architecture",
                description: "The School of Arts, Design and Architecture...",
              },
              {
                img: (
                  <Image
                    src={exploreCard1}
                    alt="card 1"
                    className="order-last object-cover min-h-[160px] object-center h-full group-hover:opacity-70"
                  />
                ),
                title: "School of Arts, Design and Architecture",
                description: "The School of Arts, Design and Architecture...",
              },
              {
                img: (
                  <Image
                    src={exploreCard1}
                    alt="card 1"
                    className="order-last object-cover min-h-[160px] object-center h-full group-hover:opacity-70"
                  />
                ),
                title: "School of Arts, Design and Architecture",
                description: "The School of Arts, Design and Architecture...",
              },
            ].map((e, i) => (
              <ContentCard key={i} {...e} flexed={true} bordered={true} />
            ))}
          </div>
        </div>
        <div className="space-y-16">
          <div className="grid grid-cols-1 my-20 gap-14 md:grid-cols-2">
            <div>
              <Image
                src={lobbie}
                className="object-cover object-center"
                alt="explore more"
              />
            </div>
            <div className="self-center space-y-6 ">
              <h3 className="text-[2.8rem] leading-[3.3rem]">
                campus-lively-and-thriving
              </h3>
              <p className="text-[1.8rem] leading-[2.6rem] tracking-[.015rem]">
                Aalto University&apos;s campus in Otaniemi is a renewable and
                living environment for research, art, learning, entrepreneurship
                and housing. The campus area inspires people to collaborate, try
                out new ideas and innovate together.
              </p>
              <ul className="space-y-6">
                {[
                  "Explore our vibrant innovation ecosystem",
                  "Explore our campus",
                  "Book a space",
                ].map((e, i) => (
                  <li key={i}>
                    <div className="flex items-center gap-3 p-px hover:bg-brandGray-light w-fit">
                      <BsArrowRight className="text-3xl" />
                      <p className="text-[1.8rem] leading-[2.2rem] underline">
                        {e}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 my-20 gap-14 md:grid-cols-2">
            <div className="self-center space-y-6">
              <h3 className="text-[2.8rem] leading-[3.3rem]">
                Virtual Campus Experience
              </h3>
              <p className="text-[1.8rem] leading-[2.6rem] tracking-[.015rem]">
                Aalto University&apos;s campus in Otaniemi is a renewable and
                living environment for research, art, learning, entrepreneurship
                and housing. The campus area inspires people to collaborate, try
                out new ideas and innovate together.
              </p>
              <ul>
                {[
                  "Explore our vibrant innovation ecosystem",
                  "Explore our campus",
                  "Book a space",
                ].map((e, i) => (
                  <li key={i}>
                    <div className="flex items-center gap-3 p-px hover:bg-brandGray-light w-fit">
                      <BsArrowRight className="text-3xl" />
                      <p className="text-[1.8rem] leading-[2.2rem] underline">
                        {e}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={lobbie2}
                className="object-cover object-center"
                alt="explore more"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-32 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-56"
                  src="/images/explore-last-1-small.jpeg"
                  width={682}
                  height={455}
                />
              ),
              description:
                "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
            },
          ].map((e, i) => (
            <ContentCard key={i} {...e} />
          ))}
        </div>
        <Community />
      </MainWrapper>
    </div>
  );
};

export default Explore;
