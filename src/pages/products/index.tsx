import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainCategory from "@/components/MainCategory";
import { categoryData } from "@/data/FilterableData";

export default function Products() {
  return (
    <>
      <Header />
      <MainCategory CategoryData={categoryData} navbarImagePath="/assets/images/slim/5_MM/Metalic/IRONY_AQUA_Preview.jpg" navbarTitle="PRODUCTS" />
      <Footer />
    </>
  );
}
