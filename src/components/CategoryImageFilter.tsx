import { useState } from "react";
import { categoryData, filterableDataglossy } from "../data/FilterableData";
import Button from "./Button";
// import { Image } from "./Image";
import { Text } from "./Text";
import Link from "next/link";
import Image from "next/image";

const CategoryImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const buttonCaptions = ["all", "12*24", "24*24", "24*48", "5mm", "9mm"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
      <div className="flex w-full md:justify-start items-start gap-6 flex-wrap sorting-wrap">
        {/* filtered cards display */}
        <main className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8  w-screen filter-grid">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-200 ${
                activeFilter === "all" || activeFilter === item.name
                  ? "block testing"
                  : "hidden"
              }`}
            >
              <Link href={item.link}>
                <Image
                  className="rounded-t-lg w-full h-[250px] overflow-hidden"
                  src={item.src}
                  alt={item.name}
                  height={"500"}
                  width={"500"}
                  loading="lazy"
                  style={{
                    objectFit:"cover"
                  }}
                  // objectCover="object-cover"
                />
              </Link>
              <div className="p-3">
                <Text
                  as="h5"
                  className="mb-2 text-base font-bold tracking-tight text-black"
                >
                  {item.title}
                </Text>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default CategoryImageFilter;
