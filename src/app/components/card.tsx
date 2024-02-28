import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ImageType = {
  setselected: any;
  author: string;
  download_url?: string;
  height?: number;
  id?: string;
  url: string;
  width?: number;
};

const Card = (props: ImageType) => {
  let randomHeight = Math.floor(Math.random() * 100);
  const object = {
    author: props.author,
    download_url: props.url,
    height: props.height,
    id: props.id,
    url: props.download_url,
    width: props.width,
  };

  return (
    <div
      className="text-[1.5rem] text-center"
      onClick={() => {
        props.setselected(object);
      }}
    >
      <div
        //
        className="backdrop-blur-sm bg-white bg-opacity-15 p-3 rounded-md shadow-md w-full inline-block m-[2px]  "
        style={{
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 251, 251, 0.26)",
        }}
      >
        <motion.img
          layoutId={`card-${props.download_url}`}
          transition={{
            layout: {
              duration: 0.2,
              ease: "easeOut",
            },
          }}
          className={`w-auto h-[${randomHeight}%]`}
          src={
            props.download_url
              ? props.download_url
              : "https://imgs.search.brave.com/l2meCh3B8V6fuFNLSIEvOAk9HulKYHEjvizaqKtumxw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wb3dl/cnVzZXJzLm1pY3Jv/c29mdC5jb20vdDUv/aW1hZ2Uvc2VydmVy/cGFnZS9pbWFnZS1p/ZC85MzQxOWlDNzg1/NUU3OEUzOUZFNjNE/L2ltYWdlLXNpemUv/bGFyZ2UvaXMtbW9k/ZXJhdGlvbi1tb2Rl/L3RydWU_dj12MiZw/eD05OTk "
          }
          alt="blank"
        />

        <Link
          className="text-white font-sem my-2 text-[1.5rem] text-center"
          href={{
            pathname: `/${props.author}`,
            query: props,
          }}
        >
          {props.author}
        </Link>
      </div>
    </div>
  );
};

export default Card;
