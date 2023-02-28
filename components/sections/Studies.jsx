import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import MainWrapper from "../wrappers/MainWrapper";
import study1 from "../../public/images/studies-1.jpeg";
import ContentCard from "../ui/ContentCard";
const Studies = () => {
  return (
    <div className="bg-brandGray">
      <MainWrapper>
        <div className="pb-[9.6rem] pt-[5.6rem] space-y-[5.6rem]">
          <SectionHeader title="Studies and courses open to all" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                img: (
                  <Image
                    src={study1}
                    alt="card 1"
                    className="object-cover object-center w-full h-[195px] group-hover:opacity-70"
                  />
                ),
                title: "Lifewide Learning",
                description:
                  "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
              },
              {
                img: (
                  <Image
                    src={study1}
                    alt="card 1"
                    className="object-cover object-center w-full w-full h-[195px] group-hover:opacity-70"
                  />
                ),
                title: "Lifewide Learning",
                description:
                  "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
              },
              {
                img: (
                  <Image
                    src={study1}
                    alt="card 1"
                    className="object-cover object-center w-full h-[195px] group-hover:opacity-70"
                  />
                ),
                title: "Lifewide Learning",
                description:
                  "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
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

export default Studies;
