import "@/styles/globals.css";

import localFont from "next/font/local";
import { Questrial } from "next/font/google";
// const nimbus = Questrial({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-nimbus",
// });
const nimbus = localFont({
  src: [
    {
      path: "../public/fonts/NimbusSanL-Reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NimbusSanL-Bol.otf",
      weight: "700",
      style: "normal",
    },
  ],
  subsets: ["latin"],
  variable: "--font-nimbus",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`${nimbus.variable} font-sans text-brandBlack`}>
      <Component {...pageProps} />
    </div>
  );
}
