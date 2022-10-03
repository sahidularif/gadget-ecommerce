export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  img_url: string;
};
export type CartItem = TProduct & {
  quantity: number;
};
export type IProduct = {
  products: CartItem[];
  totalPrice: number;
};

export const initialState: IProduct = {
  products: [],
  totalPrice: 0,
};
export enum CartActionKind {
  ADDTOCART = "ADDTOCART",
  REMOVEFROMCART = "REMOVEFROMCART",
}

// An interface for our actions
type PayloadType = {
  product: TProduct;
  full: boolean;
};
export type CartAction = {
  type: CartActionKind;
  payload: PayloadType;
};

// An interface for our state

export const cartReducer = (state: IProduct, action: CartAction) => {
  const { type, payload } = action;
  const { product, full } = payload;

  switch (type) {
    case "ADDTOCART":
      const newItem = product;
      const existingCartItems = [...state.products];
      let totalPrice = state.totalPrice;
      const existingItemIndex = state.products.findIndex(
        (product) => product.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        const currentItem = {
          ...existingCartItems[existingItemIndex],
        };
        currentItem.quantity++;
        existingCartItems[existingItemIndex] = currentItem;
        totalPrice += newItem.price;
      } else {
        existingCartItems.push({
          ...newItem,
          quantity: 1,
        });
        totalPrice += newItem.price;
      }
      return (state = { products: existingCartItems, totalPrice: totalPrice });

    case CartActionKind.REMOVEFROMCART:
      const selectedItem = payload.product;
      let totalCartPrice = state.totalPrice;
      let existingItems = [...state.products];
      const selectedItemIndex = state.products.findIndex(
        (product) => product.id === newItem.id
      );

      const priceToBeSubtractedFromTotal = full
        ? existingItems[selectedItemIndex].quantity *
          existingItems[selectedItemIndex].price
        : existingItems[selectedItemIndex].price;

      if (full) {
        const newStateItem = existingItems.filter(
          (product) => product.id !== selectedItem.id
        );
        existingItems = newStateItem;
      } else {
        existingItems[selectedItemIndex].quantity -= 1;
      }

      totalCartPrice -= priceToBeSubtractedFromTotal;
      return (state = {
        products: existingItems,
        totalPrice: totalCartPrice,
      });

    default:
      return state;
  }
};
