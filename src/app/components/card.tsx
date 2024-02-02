import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className="bg-white p-3 rounded-md shadow-md ">
      <div className="d">
        <img
          style={{ minHeight: "100%" }}
          className="w-auto h-[100%]"
          src={props.download_url}
          alt="blank"
        ></img>
      </div>
      <Link
        className="text-blue-400 underline my-2 text-[1.5rem] text-center"
        href={{
          pathname: `/${props.author}`,
          query: props,
        }}
      >
        {props.author}
      </Link>

      <h3></h3>
    </div>
  );
};

export default Card;
