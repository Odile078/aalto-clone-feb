import Image from "next/image";

const ContentCard = ({ img, title, description, date, detail }) => {
  console.log(img, title, description, date, detail);
  return (
    <div className="border border-black">
      {img}
      <div className="p-3 space-y-4">
        {title && <h5 className="text-base">{title}</h5>}
        {description && <p className="text-sm">{description}</p>}
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
