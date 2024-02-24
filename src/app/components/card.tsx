import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// lazy loading -TODo
type ImageType = {
  author: string;
  download_url?: string;
  height?: number;
  id?: string;
  url: string;
  width?: number;
};
const Card = (props: ImageType) => {
  return (
    <Link
      className=" text-[1.5rem] text-center"
      href={{
        pathname: `/${props.author}`,
        query: props,
      }}
    >
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: -20,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.2,
          type: "spring",
          damping: 12,
        }}
        exit={{
          opacity: 0,
          scale: 0.1,
        }}
        className="bg-white p-3 rounded-md shadow-md "
      >
        <div className="d">
          <img
            style={{ minHeight: "100%" }}
            className="w-auto h-[100%]"
            src={
              props.download_url
                ? props.download_url
                : "https://imgs.search.brave.com/l2meCh3B8V6fuFNLSIEvOAk9HulKYHEjvizaqKtumxw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wb3dl/cnVzZXJzLm1pY3Jv/c29mdC5jb20vdDUv/aW1hZ2Uvc2VydmVy/cGFnZS9pbWFnZS1p/ZC85MzQxOWlDNzg1/NUU3OEUzOUZFNjNE/L2ltYWdlLXNpemUv/bGFyZ2UvaXMtbW9k/ZXJhdGlvbi1tb2Rl/L3RydWU_dj12MiZw/eD05OTk "
            }
            alt="blank"
          ></img>
        </div>
        <Link
          className="text-blue-800  my-2 text-[1.5rem] text-center"
          href={{
            pathname: `/${props.author}`,
            query: props,
          }}
        >
          {props.author}
        </Link>

        <h3></h3>
      </motion.div>
    </Link>
  );
};

export default Card;
