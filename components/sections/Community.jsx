import Image from "next/image";
import Link from "next/link";
import community1 from "../../public/images/community-1.jpeg";
import community2 from "../../public/images/community-2.jpeg";
import community3 from "../../public/images/community-3.jpeg";
const Community = () => {
  return (
    <div className="mt-6 space-y-10">
      <h2 className="text-3xl font-semibold text-center">
        important-quicklinks
      </h2>
      <div className="flex flex-col mx-3 max-w-7xl md:mx-auto sm:justify-between sm:flex-row sm:items-center">
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

              <p className="text-base group-hover:bg-brandGray">{e.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Community;
