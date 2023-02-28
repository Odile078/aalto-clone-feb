import Link from "next/link";

const CustomLink = ({ text, secondary = false }) => {
  return (
    <Link
      href="/"
      className={`block text-[1.6rem] leading-[1.8rem] px-[3.1rem] text-center w-fit h-fit py-[1rem] hover:bg-yellow-300 hover:text-gray-900 rounded-[2.9rem] ${
        secondary
          ? "text-white bg-black  "
          : "bg-white text-brandBlack border-[0.1rem] hover:border-yellow-300"
      }`}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
