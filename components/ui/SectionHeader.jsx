import Link from "next/link";
import CustomLink from "./CustomLink";

const SectionHeader = ({ title, description, descriptionLink, action }) => {
  return (
    <div className="flex justify-between ">
      <div className="space-y-[1.6rem] ">
        <h2 className=" text-[2.8rem] leading-[3.3rem]">{title}</h2>
        <p className="text-[1.8rem] leading-[2.6rem] tracking-[.015rem] max-w-[91.4rem]">
          {description}{" "}
          {descriptionLink && (
            <Link
              href="/"
              className="inline-block underline hover:bg-brandGray-light"
            >
              {descriptionLink}
            </Link>
          )}
        </p>
      </div>
      {action && <CustomLink text={action} />}
    </div>
  );
};

export default SectionHeader;
