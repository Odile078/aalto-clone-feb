import "@/styles/globals.css";

// pages/_app.js
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
// const nimbus = localFont({
//   src: "../public/fonts/nimbus-sans-bold.woff2",
//   variable: "--font-nimbus",
// });

export default function App({ Component, pageProps }) {
  return (
    <div className="text-brandBlack">
      <Component {...pageProps} />
    </div>
  );
}
