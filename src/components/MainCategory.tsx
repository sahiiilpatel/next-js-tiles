import { Text } from "./Text";
import Link from "next/link";
import Image from "next/image";

interface TileProps {
    CategoryData: any[];
    navbarTitle: string;
    navbarImagePath: string;
}

const MainCategory: React.FC<TileProps> = ({ CategoryData, navbarTitle, navbarImagePath }) => {

    CategoryData.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
            <div className="relative  mt-[100px]">
                <img
                    src={navbarImagePath}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt="alt"
                />
                <div className="relative bg-opacity-50 bg-[#00000095]">
                    <svg
                        className="absolute inset-x-0 bottom-[-2px]"
                        style={{ color: "#f8f8f8" }}
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none min-h-[300px] flex justify-start items-end">
                                    {navbarTitle}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-2">
                <div className="flex w-full md:justify-start items-start gap-6 flex-wrap sorting-wrap">
                    <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8 w-screen filter-grid">
                        {CategoryData.map((item, index) => (
                            <div
                                key={index}
                                className="w-full cursor-pointer overflow-hidden transition-all duration-200 rounded-lg shadow bg-gray-200">
                                <Link href={item.link}>
                                    <Image
                                        className="rounded-t-lg w-full h-[250px] object-cover scale-100 hover:scale-110 duration-500 z-10"
                                        src={item.src}
                                        alt={item.name}
                                        height={500}
                                        width={500}
                                        loading="lazy"
                                        objectFit="cover"
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
        </>
    );
};

export default MainCategory;
