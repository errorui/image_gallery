import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Modal = ({
  selected,
  setselected,
}: {
  selected: any;
  setselected: any;
}) => {
  if (!selected) {
    return <></>;
  }
  return (
    <div
      className="flex justify-center items-center
      fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll "
      onClick={() => {
        setselected(null);
      }}
    >
      <motion.div className="w-[500px] h-[500px] ">
        <div className="z-50">
          <motion.img
            transition={{
              layout: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            layoutId={`card-${selected.url}`}
            src={selected.url}
            alt=""
            className="rounded-lg"
          />
        </div>
        <motion.div
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="bg-blue-600 p-4 backdrop-blur-xl bg-opacity-10"
        >
          <Link
            className=" text-white font-bold my-2 text-[1.5rem] text-center"
            href={{
              pathname: `/${selected.author}`,
              query: selected,
            }}
          >
            {selected.author}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Modal;
