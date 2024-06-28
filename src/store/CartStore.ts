import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  price: string;
  description: string;
  photo: string;
};

type CartStore = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i !== item),
    })),
}));
