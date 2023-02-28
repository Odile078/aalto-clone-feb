import Image from "next/image";
import Link from "next/link";
import community1 from "../../public/images/community-1.jpeg";
import community2 from "../../public/images/community-2.jpeg";
import community3 from "../../public/images/community-3.jpeg";
const Community = () => {
  return (
    <div className="mt-[7.2rem] mb-[7.2rem] space-y-10">
      <h2 className="text-[2.8rem] leading-[3.3rem] text-center">
        community-voices
      </h2>
      <div className="flex flex-col gap-4 mx-[1.6rem] md:px-16 max-w-[154rem] md:mx-auto sm:justify-between sm:flex-row sm:items-center">
        {[
          {
            icon: (
              <Image
                className="object-cover object-center rounded-full"
                src={community1}
                alt="person"
              />
            ),
            title: "Watch our videos",
          },
          {
            icon: (
              <Image
                className="object-cover object-center rounded-full"
                src={community2}
                alt="person"
              />
            ),
            title: "Read our blogs",
          },
          {
            icon: (
              <Image
                className="object-cover object-center rounded-full"
                src={community3}
                alt="person"
              />
            ),
            title: "Listen to podcasts",
          },
        ].map((e, i) => (
          <Link href="/" key={i} className="group">
            <div className="flex items-center gap-3">
              <div className="rounded-full ">{e.icon}</div>

              <p className="text-[2.1rem] leading-[2.5rem] group-hover:bg-brandGray">
                {e.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Community;
