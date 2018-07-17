import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import VariantSelector from "./VariantSelector";
import LoadingStatus from "./LoadingStatus";
import productQuery from "../queries/productQuery";
import styled from "styled-components";

const Variants = styled.div`
  margin: 1rem;
`;

class Product extends Component {
  state = {
    selectedOptions: {}
  };

  findImage = (images, variantId) => {
    const primary = images[0];

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  };

  handleOptionChange = event => {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.product.variants.edges.find(variant => {
      return variant.node.selectedOptions.every(selectedOption => {
        return selectedOptions[selectedOption.name] === selectedOption.value;
      });
    }).node;

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.image.src
    });
  };

  handleQuantityChange = event => {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  };

  renderImages = images => {
    if (!this.props.data.node) {
      return null;
    }

    return images.map((image, index) => {
      return <img key={index} src={image.transformedSrc} />;
    });
  };

  renderVariants = (variants = []) => {
    return variants.map(selector => {
      const { id, title, image } = selector.node;
      return (
        <React.Fragment key={id}>
          <div className="fa5">{title}</div>
          <img src={image.transformedSrc} alt={title} />
        </React.Fragment>
      );
    });
  };

  // setOptions = () => {
  //   this.props.product.options.forEach(selector => {
  //     this.setState({ selectedOptions: { [selector.name]: selector.values[0] } });
  //   });
  // };

  render() {
    if (this.props.loading || !this.props.data.node) {
      return <LoadingStatus />;
    }

    // console.log(this.props.data.node);
    const variants = this.props.data.node.variants;

    // const variants = this.props.data.node.variants;

    return (
      <div className="pa3">
        <div className="ma3">[Breadcrumb goes here]</div>
        <div className="ma3 f2">{this.props.data.node.title}</div>

        <Variants>
          <div className="f4">Variants</div>
          {this.renderVariants(variants.edges)}
        </Variants>
      </div>
    );
  }
}

const ProductWithQuery = compose(
  graphql(productQuery, {
    options: props => {
      return { variables: { id: props.location.state.id } };
    }
  })
)(Product);

export default ProductWithQuery;

// let variantImage =
//   this.state.selectedVariantImage || this.props.product.images.edges[0].node.src;
// let variant = this.state.selectedVariant || this.props.product.variants.edges[0].node;
// let variantQuantity = this.state.selectedVariantQuantity || 1;
// let variant_selectors = this.props.product.options.map(option => {
//   return (
//     <VariantSelector
//       handleOptionChange={this.handleOptionChange}
//       key={option.id.toString()}
//       option={option}
//     />
//   );
// });
// return (
//   <div className="Product">
//     {this.props.product.images.edges.length ? (
//       <img src={variantImage} alt={`${this.props.product.title} product shot`} />
//     ) : null}
//     <h5 className="Product__title">{this.props.product.title}</h5>
//     <span className="Product__price">${variant.price}</span>
//     {variant_selectors}
//     <label className="Product__option">
//       Quantity
//       <input
//         min="1"
//         type="number"
//         defaultValue={variantQuantity}
//         onChange={this.handleQuantityChange}
//       />
//     </label>
//     <button
//       className="Product__buy button"
//       onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}
//     >
//       Add to Cart
//     </button>
//   </div>
// );
