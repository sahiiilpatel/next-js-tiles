import Homec from "@/components/HomeC";
import Loader from "@/components/Loader";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Homec />
          <Footer />
        </>
      )}
    </>
  );
}
