"use client";
import Image from "next/image";
import Gridcontainer from "./components/gridcontainer";
import Card from "./components/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Masonry } from "react-masonry/dist";
type ImageType = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

export default function App({ setselected }: { setselected: any }) {
  const [page, setpage] = useState<number>(1);
  const [Posts, setposts] = useState<ImageType[]>([]);
  const [loading, setloading] = useState<boolean>(false);

  const getapi = async () => {
    setloading(true);
    let data = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=25`
    );
    setloading(false);
    setposts([...Posts, ...data?.data]);
  };
  useEffect(() => {
    getapi();
  }, [page]);
  return (
    <div className="bg-blue-100 min-h-[100vh] flex flex-col justify-center items-center">
      <h1 className=" text-[3rem] text-blue-950 font-bold font-body">
        Photo gallery
      </h1>
      <AnimatePresence>
        <Gridcontainer>
          {Posts.map((post) => {
            return (
              <Card
                setselected={setselected}
                url="zz"
                download_url={post.download_url}
                key={post.id}
                author={post.author}
              ></Card>
            );
          })}
        </Gridcontainer>
      </AnimatePresence>

      <motion.button
        className=" font-bold bg-cyan-400 mx-auto px-1  py-2 text-white rounded-md my-3 w-40
          capitalize"
        onClick={() => {
          setpage((page) => page + 1);
        }}
        layout
        whileHover={{
          backgroundColor: "blue",
          rotate: "5deg",
        }}
        whileTap={{
          scale: 0.9,
          rotate: "0",
          backgroundColor: "red",
        }}
        transition={{
          duration: 1 / 2,
        }}
      >
        click to load more
      </motion.button>
    </div>
  );
}
