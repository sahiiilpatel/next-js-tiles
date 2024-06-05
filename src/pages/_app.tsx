import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/public/vendor/bootstrap/css/bootstrap.min.css'
import '/public/assets/css/style.css'
import '/public/assets/css/fontawesome.css'
import '/public/assets/css/animated.css'
import '/public/assets/css/loader.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [title, setTitle] = useState("FLOWLESS INTERNATIONAL");

  useEffect(() => {
    const path = router.asPath;
    const pathSegments = path.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1] || 'HOME';
    const uppercaseSegment = lastSegment.toUpperCase().replace(/-/g, ' ') === 'HOME' ? 'INTERNATIONAL' : `${'- ' + lastSegment.toUpperCase().replace(/-/g, ' ')}`
    setTitle(`FLOWLESS ${uppercaseSegment}`);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="google-site-verification" content="d4O6OCZopFR4S3z0BDFfBQUwNUjiOkeADIeJ4d3ePJw" />
        <meta name="description" content="FLOWLESS INTERNATIONAL" />
        <link rel="icon" href="../../assets/images/small_logo.svg" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
