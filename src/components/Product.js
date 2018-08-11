import React, { Component } from "react";
import PropTypes from "prop-types";
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
  static propTypes = {
    addVariantToCart: PropTypes.func,
    checkoutLineItemsAdd: PropTypes.func,
    data: PropTypes.object
  };

  state = {
    selectedOptions: {},
    selectedVariant: null,
    selectedVariantImage: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data.node !== prevProps.data.node) {
      const { options } = this.props.data.node;

      options.forEach(selector => {
        this.setState({
          selectedOptions: { [selector.name]: selector.values }
        });
      });
    }

    if (!prevState.selectedVariant && !this.props.data.loading && this.props.data.node.variants) {
      this.setState({ selectedVariant: this.props.data.node.variants.edges[0].node });
    }
  }

  // findImage = (images, variantId) => {
  //   const primary = images[0];

  //   const image = images.filter(function(image) {
  //     return image.variant_ids.includes(variantId);
  //   })[0];

  //   return (image || primary).src;
  // };

  renderVariantSelector = options => {
    return options.map(option => {
      // const { id, title, image } = option.node;

      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id}
          option={option}
        />
      );
    });
  };

  handleOptionChange = event => {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.data.node.variants.edges.find(variant => {
      return variant.node.selectedOptions.every(selectedOption => {
        return selectedOptions[selectedOption.name] === selectedOption.value;
      });
    }).node;

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.image.transformedSrc
    });
  };

  // handleQuantityChange = event => {
  //   this.setState({
  //     selectedVariantQuantity: event.target.value
  //   });
  // };

  // renderImages = images => {
  //   return images.map((image, index) => {
  //     console.log(image);
  //     return <img key={index} src={image.node.transformedSrc} alt="" />;
  //   });
  // };

  // setOptions = () => {
  //   this.props.product.options.forEach(selector => {
  //     this.setState({ selectedOptions: { [selector.name]: selector.values[0] } });
  //   });
  // };

  render() {
    if (this.props.loading || !this.props.data.node) {
      return <LoadingStatus />;
    }

    const options = this.props.data.node.options;
    const variant = this.state.selectedVariant || this.props.data.node.variants.edges[0].node;
    const variantImage =
      this.state.selectedVariantImage || this.props.data.node.images.edges[0].node.transformedSrc;

    return (
      <div className="pa3">
        <div className="ma3">[Breadcrumb goes here]</div>
        <div className="ma3 f2">{this.props.data.node.title}</div>

        {options[0].values.length === 1 ? null : (
          <Variants>
            <div className="f4">Variants</div>
            {this.renderVariantSelector(options)}
          </Variants>
        )}

        <h2>{variant.title !== "Default Title" ? variant.title : ""}</h2>
        <img src={variantImage} />
        <h2>${variant.price}</h2>
        <button onClick={e => this.props.addVariantToCart(this.state.selectedVariant.id, 1)}>
          Add To Cart
        </button>
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
