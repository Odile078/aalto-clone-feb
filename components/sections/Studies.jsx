import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import MainWrapper from "../wrappers/MainWrapper";
import study1 from "../../public/images/studies-1.jpeg";
import ContentCard from "../ui/ContentCard";
const Studies = () => {
  return (
    <div className="bg-brandGray">
      <MainWrapper>
        <div className="py-10 space-y-6">
          <SectionHeader title="Studies and courses open to all" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                img: (
                  <Image
                    src={study1}
                    alt="card 1"
                    className="object-cover object-center h-40"
                  />
                ),
                title: "Lifewide Learning(external link)",
                description:
                  "Select a solution that suits you, ranging from individual courses to programmes that are open for all.",
              },
              {
                img: (
                  <Image
                    src={study1}
                    alt="card 1"
                    className="object-cover object-center h-40"
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
                    className="object-cover object-center h-40"
                  />
                ),
                title: "Lifewide Learning(external link)",
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
