"use client";
import React, { useEffect, useState } from "react";
import api_client from "@/config/api_client";
import { IProducts } from "@/types/Product";
import Image from "next/image";
import { LuShoppingBag } from "react-icons/lu";

export default function Products() {
  const [products, setProducts] = useState([] as IProducts[]);

  async function getProduct() {
    const response = await api_client.get(
      "/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );
    setProducts(response.data.products);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 h-[600px]">
      {products &&
        products.map((product: IProducts) => (
          <section
            key={product.id}
            className="flex flex-col w-56 h-72 rounded-lg shadow-2xl bg-white"
          >
            <div className="flex flex-col justify-between h-full  p-4">
              <div className="flex h-1/2 items-center justify-center">
                <Image
                  className="w-32 h-w-32"
                  src={product?.photo}
                  alt="product"
                  width={140}
                  height={100}
                />
              </div>
              <div className="flex flex-col h-[40%] justify-between">
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-[#2C2C2C] font-normal">{product?.name}</p>
                  <section className="bg-[#373737] p-1 h-fit w-fit flex rounded-lg text-white text-xs font-bold">
                    R${parseInt(product?.price)}
                  </section>
                </div>
                <p className="text-[8px] text-[#2C2C2C]">
                  {product?.description}
                </p>
              </div>
            </div>
            <button className="flex flex-row items-center justify-center gap-3 bg-primary text-white h-[14%] rounded-b-lg">
              <LuShoppingBag />
              <p className="font-semibold">COMPRAR</p>
            </button>
          </section>
        ))}
    </div>
  );
}
