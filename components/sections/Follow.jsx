import Link from "next/link";
import MainWrapper from "../wrappers/MainWrapper";

const Follow = () => {
  return (
    <div className="py-40 my-10 bg-yellow-400">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h2 className="text-[7.5rem] leading-[8.8rem] font-bold text-center">
              Follow us
            </h2>
            <p className="flex gap-2 text-center text-[3.6rem] leading-[4.2rem]">
              {["facebook", "twitter", "instagram", "linkedin"].map((e, i) => (
                <Link key={i} href="/" className=" hover:bg-brandGray-light">
                  <span className="no-underline">
                    {i == 3 ? ` & ` : i !== 0 ? "," : ""}
                  </span>
                  <span className="underline">{e}</span>
                </Link>
              ))}
            </p>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Follow;
