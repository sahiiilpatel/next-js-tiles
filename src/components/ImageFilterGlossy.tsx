import { useState } from "react";
import { filterableDataglossy } from "../data/FilterableData";
import Button from "./Button";
import { Image } from "./Image";
import { Text } from "./Text";
import Link from "next/link";

const ImageFilterGlossy = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const buttonCaptions = ["all", "12*24", "24*24", "24*48", "5mm", "9mm"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-2">
      <div className="flex w-full md:justify-start items-start gap-6 flex-wrap sorting-wrap">
        <div className="flex flex-col w-[20%] sorting">
          <div className="">
            <details className="mb-2">
              <summary className="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md">
                <span className="font-semibold">Sizes & Thickness</span>
              </summary>
              <ul className="space-y-4">
                <li>
                  <details className="mb-2 test">
                    <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                      {buttonCaptions.map((filter) => (
                        <Button
                          key={filter}
                          onClick={() => handleFilterClick(filter)}
                          type="button"
                          className={`focus:outline-none border-2 border-[#fe3f40] hover:bg-[#fe3f40] hover:text-white font-medium rounded-lg text-sm px-5 text-[#fe3f40] focus:text-[#000] py-2.5 mb-2 capitalize ${
                            activeFilter === filter
                              ? "bg-[#fe3f40] text-white"
                              : " "
                          }`}
                        >
                          {filter === "all" ? "All Sizes" : filter}
                        </Button>
                      ))}
                    </summary>
                  </details>
                </li>
              </ul>
            </details>
          </div>
        </div>
        {/* filtered cards display */}
        <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8  w-[78%] filter-grid">
          {filterableDataglossy.map((item, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer overflow-hidden transition-all duration-200 rounded-lg shadow bg-gray-200 ${
                activeFilter === "all" || activeFilter === item.name
                  ? "block testing"
                  : "hidden"
              }`}
            >
              <Link href={item.link}>
                <Image
                  className="rounded-t-lg w-full h-[250px] object-cover scale-100 hover:scale-110 duration-500 z-10"
                  image={item.src}
                  alt={item.name}
                  objectCover="object-cover"
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

export default ImageFilterGlossy;
