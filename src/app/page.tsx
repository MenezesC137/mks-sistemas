"use client";
import React from "react";
import Products from "@/components/Products";
import { IoCart } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-white items-center">
      <section className="flex justify-between bg-primary px-12 py-2 items-center w-full">
        <div className="flex flex-row items-end gap-2 text-white   ">
          <p className="font-semibold text-[40px]">MKS</p>
          <p className="font-extralight text-[20px] pb-3 leading-6">sistemas</p>
        </div>
        <button className="bg-white flex flex-row w-20 h-10 rounded-lg items-center justify-between px-4">
          <IoCart size={20} />
          <p className="font-bold text-lg">0</p>
        </button>
      </section>
      <section className="flex h-full w-[1000px] items-center pb-8">
        <Products />
      </section>
      <footer className="flex justify-center items-center h-8 absolute bottom-0 bg-gray-100 w-full">
        <p className="font-normal text-xs text-black">
          MKS sistemas © Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
