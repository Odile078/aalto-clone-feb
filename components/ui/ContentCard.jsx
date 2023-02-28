import Image from "next/image";

const ContentCard = ({
  img,
  title,
  description,
  date,
  detail,
  flexed = false,
  bordered = false,
}) => {
  // console.log(img, title, description, date, detail);
  return (
    <div
      className={` group cursor-pointer ${
        bordered ? " border border-black " : ""
      } ${flexed ? " flex justify-between" : ""}`}
    >
      {img}
      <div className="p-[2.4rem] space-y-4 bg-white self-end">
        {title && (
          <h5 className="text-[2.1rem] leading-[2.5rem] group-hover:bg-brandGray-light w-fit p-px">
            {title}
          </h5>
        )}
        {description && (
          <p className="text-[1.8rem] leading-[2.5rem] ">{description}</p>
        )}
        {date && (
          <div className="flex gap-1">
            <p className="pl-px border-r">{date}</p>
            <p>{detail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
