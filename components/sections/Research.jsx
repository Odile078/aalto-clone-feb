import Image from "next/image";
import ContentCard from "../ui/ContentCard";
import SectionHeader from "../ui/SectionHeader";
import MainWrapper from "../wrappers/MainWrapper";
import research1 from "../../public/images/research-1.jpeg";
import research2 from "../../public/images/research-2.jpeg";
const Research = () => {
  return (
    <div className="bg-brandGray">
      <MainWrapper>
        <div className="pb-[9.6rem] pt-[5.6rem] space-y-6">
          <SectionHeader
            title="Read about our research and donate"
            description="At Aalto University, we create the conditions for innovation, economic growth, employment and wellbeing. A gift to the university is an investment in a better future."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                img: (
                  <Image
                    src={research1}
                    alt="card 1"
                    className="object-cover object-center h-[298px] w-full group-hover:opacity-70"
                  />
                ),
                title: "Research & Art",
                description:
                  "Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health.",
              },
              {
                img: (
                  <Image
                    src={research2}
                    alt="card 1"
                    className="object-cover object-center h-[298px] w-full group-hover:opacity-70"
                  />
                ),
                title: "Research & Art",
                description:
                  "Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health.",
              },
            ].map((e, i) => (
              <ContentCard key={i} {...e} />
            ))}
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Research;
