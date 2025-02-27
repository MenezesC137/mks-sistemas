import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IProduct } from "@/types/Product";
import { useCartStore } from "@/store/CartStore";

export default function ItemCart({ item }: { item: IProduct }) {
  const [quantity, setQuantity] = useState(1);

  const [updateQuantity, removeItem] = useCartStore((state) => [
    state.updateQuantity,
    state.removeItem,
  ]);

  const handleQuantity = (symbol: number) => {
    if (symbol === 1) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        updateQuantity({ ...item, quantity: quantity - 1 }, 1);
      }
    } else {
      setQuantity(quantity + 1);
      updateQuantity({ ...item, quantity: quantity + 1 }, 2);
    }
  };

  return (
    <div className="relative flex h-24 w-[98%] bg-white rounded-lg items-center gap-2">
      <button
        onClick={() => removeItem(item)}
        className="absolute flex -inset-y-1 top-0 right-0 bg-black rounded-full items-center justify-center h-5 w-5 -mt-1 -mr-1 overflow-hidden"
      >
        <IoClose color="#fff" size={14} />
      </button>
      <section className="w-1/5">
        <Image
          className="w-20 h-20"
          src={item?.photo}
          alt="product"
          width={140}
          height={100}
        />
      </section>
      <section className="flex flex-col w-2/5">
        <span className="font-normal text-sm">{item?.name}</span>
      </section>
      <section className="flex flex-col w-1/5 h-24 items-center justify-center p-2">
        <span className="w-full text-[7px]">Qtd.</span>
        <div className="border h-6 w-full rounded-md items-center justify-between flex p-2 ">
          <button
            onClick={() => handleQuantity(1)}
            className="text-base font-extralight"
          >
            -
          </button>
          <span className="border-x text-xs px-2">{item.quantity}</span>
          <button
            onClick={() => handleQuantity(2)}
            className="text-base font-extralight"
          >
            +
          </button>
        </div>
      </section>
      <span className="text-sm font-bold w-1/5">
        R${parseInt(item.price) * item.quantity}
      </span>
    </div>
  );
}
