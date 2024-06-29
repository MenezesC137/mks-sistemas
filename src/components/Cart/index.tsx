"use client";
import React from "react";
import ItemCart from "../ItemCart";
import { IoCart, IoClose } from "react-icons/io5";
import { useCartStore } from "@/store/CartStore";

interface CartProps {
  close: () => void;
}

export default function Cart({ close }: CartProps) {
  const [Items, removeAll] = useCartStore((state) => [
    state.items,
    state.removeAll,
  ]);

  const handleTotal = () => {
    let total = 0;
    Items.map((item) => {
      total += parseFloat(item.price) * item.quantity;
    });
    return total;
  };

  const checkout = () => {
    const confirm = window.confirm("Finalizar compra?");
    if (confirm) {
      alert("Compra finalizada com sucesso!");
      removeAll();
    } else {
      alert("Continue comprando!");
    }
  };

  return (
    <div className="flex flex-col min-h-full w-4/12">
      <div className="flex flex-col h-full w-full bg-primary p-6">
        <div className="flex flex-row w-full justify-between h-10">
          <h1 className="text-2xl text-white font-bold">Carrinho de compras</h1>
          <button
            onClick={close}
            className="flex bg-black rounded-full h-10 items-center justify-center w-10"
          >
            <IoClose color="#fff" size={26} />
          </button>
        </div>
        <div className="flex flex-col h-[600px] pt-6 overflow-auto gap-4 scrollbar-hide">
          {Items.length === 0 ? (
            <span className="text-white font-bold text-2xl flex h-full w-full flex-col items-center justify-center">
              <IoCart size={100} />
              Carrinho vazio
            </span>
          ) : (
            Items.map((item) => <ItemCart key={item.id} item={item} />)
          )}
        </div>
        {Items.length !== 0 && (
          <div className="flex h-10 text-white font-bold text-2xl items-end justify-between">
            <span>Total:</span>
            <span>R$ {handleTotal()}</span>
          </div>
        )}
      </div>
      {Items.length !== 0 && (
        <button
          onClick={() => checkout()}
          className="bg-black w-full h-24 min-h-1/6"
        >
          <span className="text-white font-bold text-2xl">
            Finalizar compra
          </span>
        </button>
      )}
    </div>
  );
}
