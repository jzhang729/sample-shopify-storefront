import React from "react";

export const ShopContext = React.createContext({
  isCartOpen: false,
  toggleCart: () => {
    this.isCartOpen = !this.isCartOpen;
    console.log("toggled, cart open", this.isCartOpen);
  }
});
