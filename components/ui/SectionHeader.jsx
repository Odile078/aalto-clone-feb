import Link from "next/link";
import CustomLink from "./CustomLink";

const SectionHeader = ({ title, description, descriptionLink, action }) => {
  return (
    <div className="flex justify-between ">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg">
          {description}{" "}
          {descriptionLink && (
            <Link
              href="/"
              className="inline-block underline bg-brandGray-light"
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
