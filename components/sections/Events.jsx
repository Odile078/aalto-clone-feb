import Image from "next/image";
import ContentCard from "../ui/ContentCard";
import SectionHeader from "../ui/SectionHeader";
import MainWrapper from "../wrappers/MainWrapper";
import card1 from "../../public/images/event-1.png";
const Events = () => {
  return (
    <div className="bg-brandGray">
      <MainWrapper>
        <div className="py-10 space-y-6">
          <SectionHeader
            title="Join our many events"
            description="Find more current news and interesting events on the"
            descriptionLink="News and events page."
            action="see all events"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                description:
                  "Reactive fabrics respond to changes in temperature",
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
                description:
                  "Reactive fabrics respond to changes in temperature",
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
                description:
                  "Reactive fabrics respond to changes in temperature",
                date: "21.2.2023",
                detail: "News",
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

export default Events;
