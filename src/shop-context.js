import React from "react";

// https://reactjs.org/docs/context.html#reactcreatecontext
export const ShopContext = React.createContext({
  isCartOpen: false,
  toggleCart: () => {
    this.isCartOpen = !this.isCartOpen;
  }
});
