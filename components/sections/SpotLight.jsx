import SectionHeader from "../ui/SectionHeader";
import card1 from "../../public/images/card-1.jpeg";
import ContentCard from "../ui/ContentCard";
import MainWrapper from "../wrappers/MainWrapper";
import Image from "next/image";
const SpotLight = () => {
  return (
    <MainWrapper>
      <div className="py-10 space-y-6">
        <SectionHeader
          title="Spotlight"
          description="Find more current news and interesting events on the"
          descriptionLink="News and events page."
          action="see all Aalto university news"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            {
              img: (
                <Image
                  src={card1}
                  alt="card 1"
                  className="object-cover object-center h-40"
                />
              ),
              title: "Shrinking from the heat",
              description: "Reactive fabrics respond to changes in temperature",
              date: "21.2.2023",
              detail: "News",
            },
            {
              img: (
                <Image
                  src={card1}
                  alt="card 1"
                  className="object-cover object-center h-40"
                />
              ),
              title: "Shrinking from the heat",
              description: "Reactive fabrics respond to changes in temperature",
              date: "21.2.2023",
              detail: "News",
            },
            {
              img: (
                <Image
                  src={card1}
                  alt="card 1"
                  className="object-cover object-center h-40"
                />
              ),
              title: "Shrinking from the heat",
              description: "Reactive fabrics respond to changes in temperature",
              date: "21.2.2023",
              detail: "News",
            },
          ].map((e, i) => (
            <ContentCard key={i} {...e} />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default SpotLight;
