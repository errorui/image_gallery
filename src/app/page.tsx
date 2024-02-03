"use client";
import Image from "next/image";
import Gridcontainer from "./components/gridcontainer";
import Card from "./components/card";
import axios from "axios";
import { useEffect, useState } from "react";

type ImageType = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

export default function Home() {
  const [page, setpage] = useState<number>(1);
  const [Posts, setposts] = useState<ImageType[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const getapi = async () => {
    setloading(true);
    let data = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    setloading(false);
    setposts([...Posts, ...data?.data]);
  };
  useEffect(() => {
    getapi();
  }, [page]);
  return (
    <div className="bg-blue-200 min-h-[100vh] flex flex-col justify-center items-center">
      <h1 className=" text-[3rem] text-blue-900 font-bold">Photo gallery</h1>

      <Gridcontainer>
        {Posts.map((post) => {
          return (
            <Card
              url="zz"
              download_url={post.download_url}
              key={post.id}
              author={post.author}
            ></Card>
          );
        })}
      </Gridcontainer>

      <button
        className="  bg-red-500 mx-auto px-2 py-1 text-white rounded-md my-3"
        onClick={() => {
          setpage((page) => page + 1);
        }}
      >
        click to loadmore
      </button>
    </div>
  );
}
