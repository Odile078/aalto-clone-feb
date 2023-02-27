import "@/styles/globals.css";

// pages/_app.js
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const nimbus = localFont({
  src: [
    {
      path: "../public/fonts/nibus-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nimbus",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${nimbus.variable} font-sans `}>
      <Component {...pageProps} />
    </div>
  );
}
