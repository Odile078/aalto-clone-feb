import MainWrapper from "../wrappers/MainWrapper";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
} from "react-icons/fa";
import { BiMessageAltEdit } from "react-icons/bi";
import Link from "next/link";
import CustomLink from "../ui/CustomLink";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="py-10 border-t border-black">
      <MainWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="py-0 space-y-2 transition-all duration-200 group">
              {/* <p className="text-4xl group-hover:text-base">
                A<span className="group-hover:hidden">?</span>
                <span className="hidden group-hover:inline-block">&quot;</span>
              </p>
              <p className="text-xs ">Aalto university</p> */}
              <Image
                width={98}
                height={69}
                src="/images/question-logo.png"
                alt="logo"
                className="w-24 h-20 transition-all duration-300 group-hover:hidden "
              />
              <Image
                src="/images/comma-logo.png"
                alt="logo"
                width={98}
                height={69}
                className="hidden w-24 h-20 transition-all duration-300 group-hover:block "
              />
            </div>
            <p className="text-[1.8rem] leading-[2.6rem] tracking-[.015rem]">
              Aalto University
              <br />
              P.O. Box 11000 (Otakaari 1B)
              <br />
              FI-00076 AALTO
              <br />
              Switchboard: +358 9 47001
            </p>
            <div>
              <h2 className="text-[2.1rem] leading-[2.5rem] ">Follow us:</h2>
              <ul className="flex gap-px">
                {[
                  { icon: <FaFacebookF /> },
                  { icon: <FaTwitter /> },
                  { icon: <FaInstagram /> },
                  { icon: <FaYoutube /> },
                  { icon: <FaSnapchatGhost /> },
                  { icon: <BiMessageAltEdit /> },
                ].map((e, i) => (
                  <li
                    key={i}
                    className="block p-2 rounded-full hover:bg-brandGray-light"
                  >
                    <Link className="" href="/">
                      {e.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-[2.1rem] leading-[2.5rem] ">Quicklinks</h2>
              <ul className="space-y-2">
                {[
                  "Research and artistic outputs",
                  "Library – Learning Centre",
                  "Admissions",
                  "Alumni",
                  "Media",
                  "IT services",
                  "Open University",
                  "Aalto University Shop",
                ].map((e, i) => (
                  <li key={i}>
                    <Link
                      href="/"
                      className="text-[1.6rem] leading-[1.9rem] underline hover:bg-brandGray-light"
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-[2.1rem] leading-[2.5rem] ">Latest</h2>
              <ul className="space-y-2">
                {["News", "Events", "Careers"].map((e, i) => (
                  <li key={i}>
                    <Link
                      href="/"
                      className="text-[1.6rem] leading-[1.9rem] underline hover:bg-brandGray-light"
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-[2.1rem] leading-[2.5rem] ">Contacts</h2>
              <ul className="space-y-2">
                {["Campus maps", "Contact information"].map((e, i) => (
                  <li key={i}>
                    <Link
                      href="/"
                      className="text-[1.6rem] leading-[1.9rem] underline hover:bg-brandGray-light"
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-[2.1rem] leading-[2.5rem] ">For Students</h2>
              <ul className="space-y-2">
                {[
                  "Student Guide",
                  "Webmail",
                  "MyCourses",
                  "MyStudies",
                  "Sisu",
                ].map((e, i) => (
                  <li key={i}>
                    <Link
                      href="/"
                      className="text-[1.6rem] leading-[1.9rem] underline hover:bg-brandGray-light"
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeader
              title="Together towards a better world."
              description="Support new ideas, research, work and leadership development
              towards a stronger Finland."
            />

            <CustomLink secondary={true} text="Donate to Aalto University" />
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-6 mt-6 border-t border-t-black lg:flex-row lg:justify-between">
          <ul className="flex flex-wrap gap-6">
            {[
              "Privacy notice",
              "Cookie policy",
              "Feedback",
              "Accessibility statement",
              "Cookie settings",
            ].map((e, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="text-[1.6rem] leading-[1.9rem] underline hover:bg-brandGray-light"
                >
                  {e}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-6">
            {["Suomeksi", "Svenska", "English"].map((e, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="text-[1.6rem] leading-[1.9rem] underline hover:bg-brandGray-light"
                >
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MainWrapper>
    </footer>
  );
};

export default Footer;
