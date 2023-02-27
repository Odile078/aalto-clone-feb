import Image from "next/image";
import Link from "next/link";
import explore from "../../public/images/explore.jpeg";
import MainWrapper from "../wrappers/MainWrapper";
import { FaPen, FaRegFolder } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import SectionHeader from "../ui/SectionHeader";
import ContentCard from "../ui/ContentCard";
import exploreCard1 from "../../public/images/explore-1.jpeg";
import lobbie from "../../public/images/lobbie.jpeg";
import { BsArrowRight } from "react-icons/bs";
import Community from "./Community";
const Explore = () => {
  return (
    <div className="py-10">
      <Image
        src={explore}
        alt="Explore background"
        className="relative object-cover object-center w-screen max-h-96 -z-10"
      />
      <MainWrapper>
        <div className="-mt-20 bg-yellow-400 ">
          <h1 className="p-10 text-6xl font-bold">Explore Aalto University</h1>
          <div className="grid grid-cols-1 border-t border-black md:grid-cols-3">
            {["Study at Aalto", "Open positions", "Contact us"].map((e, i) => (
              <div
                key={i}
                className="flex justify-center py-6 border-r border-black"
              >
                <Link
                  href="/"
                  className="block text-lg text-center underline hover:bg-brandGray-light w-fit"
                >
                  {e}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 space-y-10">
          <h2 className="text-3xl font-semibold text-center">
            important-quicklinks
          </h2>
          <div className="flex flex-col max-w-2xl mx-3 md:mx-auto sm:justify-between sm:flex-row sm:items-center">
            {[
              { icon: <FaPen className="text-2xl" />, title: "For personnel" },
              {
                icon: <FaRegFolder className="text-2xl" />,
                title: "Aalto Handbook",
              },
              {
                icon: <HiOutlinePhone className="text-2xl" />,
                title: "Safety",
              },
            ].map((e, i) => (
              <Link href="/" key={i} className="group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-400 rounded-full">{e.icon}</div>

                  <p className="text-2xl group-hover:bg-brandGray-light">
                    {e.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-10 space-y-6">
          <SectionHeader
            title="Explore our six schools"
            description="Scientific research and artistic activities are carried out at six schools and their departments and units."
          />

          <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
            {[
              {
                img: (
                  <Image
                    src={exploreCard1}
                    alt="card 1"
                    className="object-cover object-center h-40"
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
                    className="object-cover object-center h-40"
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
                    className="object-cover object-center h-40"
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
                    className="object-cover object-center h-40"
                  />
                ),
                title: "School of Arts, Design and Architecture",
                description: "The School of Arts, Design and Architecture...",
              },
            ].map((e, i) => (
              <ContentCard key={i} {...e} />
            ))}
          </div>
        </div>
        <div className="space-y-16">
          <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2">
            <div>
              <Image
                src={lobbie}
                className="object-cover object-center"
                alt="explore more"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">
                campus-lively-and-thriving
              </h3>
              <p className="text-base">
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
                    <div className="flex items-center gap-3">
                      <BsArrowRight className="text-lg" />
                      <p>{e}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">
                Virtual Campus Experience
              </h3>
              <p className="text-base">
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
                    <div className="flex items-center gap-3">
                      <BsArrowRight className="text-lg" />
                      <p>{e}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={lobbie}
                className="object-cover object-center"
                alt="explore more"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: (
                <Image
                  //   src={card1}
                  alt="card 1"
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                  https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                  https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                  https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                  https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                  https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
                  className="object-cover object-center h-40"
                  srcset="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=blwQPDvC 280w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_402w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=oTlYOy3_ 402w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_512w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=TquHOA6G 512w, 
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_682w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=thZFiyFv 682w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1074w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=Mpfr0565 1074w,
                    https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1280w_ah_d/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=2OhYVT6B 1280w"
                  media="all"
                  type="image/jpeg"
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
