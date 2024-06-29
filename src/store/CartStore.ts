import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  price: string;
  description: string;
  photo: string;
  quantity: number;
};

type CartStore = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  updateQuantity: (item: Item, symbol: number) => void;
  removeAll: () => void;
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
  removeAll: () =>
    set(() => ({
      items: [],
    })),
  updateQuantity: (item, symbol) =>
    set((state) => ({
      items: state.items.map((i) => {
        if (i.id === item.id) {
          if (symbol === 1) {
            if (i.quantity > 1) {
              return {
                ...i,
                quantity: i.quantity - 1,
              };
            }
          }
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      }),
    })),
}));
