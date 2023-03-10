import Image from "next/image";
import ContentCard from "../ui/ContentCard";
import SectionHeader from "../ui/SectionHeader";
import MainWrapper from "../wrappers/MainWrapper";
import infomation1 from "../../public/images/information-1.png";
import infomation2 from "../../public/images/information-2.jpeg";
const Information = () => {
  return (
    <MainWrapper>
      <div className="py-[7.2rem] space-y-6">
        <SectionHeader title="Information on Ukraine and coronavirus" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              img: (
                <Image
                  src={infomation1}
                  alt="card 1"
                  className="order-last object-cover object-center min-h-[160px]  h-full group-hover:opacity-70"
                />
              ),
              title: "Ukraine war",
              description: "On this page, we will gather information...",
            },
            {
              img: (
                <Image
                  src={infomation2}
                  alt="card 1"
                  className="order-last object-cover min-h-[160px]  object-center h-full group-hover:opacity-70"
                />
              ),
              title: "Information on coronavirus",
              description: "Information on the effects of coronavirus...",
            },
          ].map((e, i) => (
            <ContentCard key={i} {...e} flexed={true} bordered={true} />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Information;
