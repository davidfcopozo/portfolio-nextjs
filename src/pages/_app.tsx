import "@/scss/globals.css";
import "@/scss/index.scss";
import type { AppProps } from "next/app";
import { Raleway, Fira_Code, Fugaz_One } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--fugaz-one",
  preload: true,
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
  preload: true,
});
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fira-code",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firaCode.style.fontFamily};
          --fugaz-one: ${fugazOne.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
