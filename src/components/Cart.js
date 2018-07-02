import React, { Component } from "react";
import PropTypes from "prop-types";

import { ShopContext } from "../shop-context";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.cart = React.createRef();
  }

  static propTypes = {
    checkout: PropTypes.object,
    removeLineItemInCart: PropTypes.func,
    updateLineItemInCart: PropTypes.func
  };

  render() {
    return (
      <ShopContext.Consumer>
        {({ toggleCart }) => {
          return (
            <div className="Content__cart" ref={this.cart}>
              <button onClick={toggleCart}>Click Me To Close</button>
              <div>I am the cart</div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
              <div>
                Ut laboris do quis laborum id exercitation qui. Ullamco ullamco anim ullamco commodo
                sint non aute adipisicing laborum sit fugiat mollit. Ullamco exercitation nulla est
                irure laboris velit nostrud excepteur ullamco ea ad excepteur.
              </div>
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Cart;
