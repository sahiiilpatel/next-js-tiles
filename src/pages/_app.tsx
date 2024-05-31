import type { AppProps } from "next/app";
import "../../public/assets/css/style.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>FLOWLESS INTERNATIONAL</title>
        <meta name="description" content="FLOWLESS INTERNATIONAL" />
        <link rel="icon" href="../../assets/images/small_logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
