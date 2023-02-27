import Link from "next/link";

const CustomLink = ({ text, secondary = false }) => {
  return (
    <Link
      href="/"
      className={`block text-base px-8 text-center w-fit h-fit py-2 hover:bg-yellow-300 hover:text-gray-900 rounded-3xl ${
        secondary
          ? "text-white bg-black  "
          : "bg-white text-brandBlack border hover:border-yellow-300"
      }`}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
