"use client";
import { useState } from "react";
import App from "./app";
import Modal from "./components/modal";

export default function Home() {
  const [selected, setselected] = useState();
  return (
    <>
      <App setselected={setselected}></App>
      <Modal selected={selected} setselected={setselected}></Modal>
    </>
  );
}
