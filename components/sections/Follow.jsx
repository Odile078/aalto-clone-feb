import Link from "next/link";
import MainWrapper from "../wrappers/MainWrapper";

const Follow = () => {
  return (
    <div className="py-40 my-10 bg-yellow-400">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h2 className="text-4xl font-bold">Follow us</h2>
            <p className="flex gap-2 text-center">
              {["facebook", "twitter", "instagram", "linkedin"].map((e, i) => (
                <Link
                  key={i}
                  href="/"
                  className="underline hover:bg-brandGray-light"
                >
                  {e}
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
