"use client";
import { useRouter, useSearchParams } from "next/navigation";
import "./new.css";
const Page = () => {
  const query = useSearchParams();

  return (
    <div>
      <h1 className="h-[40px]uppercase text-center text-[4rem] text-uppercase mt-4 font-semibold tracking-tighter">
        About the photographer
      </h1>
      <section className=" flex justify-center items-center min-h-[calc(100vh-115px)]  text-gray-600 body-font">
        <div className="  container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
          <div className="  lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={query.get("download_url")!}
            />
          </div>
          <div className=" p-5 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" md:text-[4rem] p-5 title-font sm:text-4xl text-3xl mb-4 font-thin text-gray-900">
              {query.get("author")}
            </h1>
            <p className="p-5 mb-8 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              repellendus praesentium ad? Consequuntur a natus consectetur
              suscipit at dolore reprehenderit nihil, dolorem, nostrum velit
              non! Nam temporibus neque officiis fugit debitis. Saepe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
