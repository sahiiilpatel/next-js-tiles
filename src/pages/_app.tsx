import type { AppProps } from "next/app";
import "../../public/assets/css/style.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
