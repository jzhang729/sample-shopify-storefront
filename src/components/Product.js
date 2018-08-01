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
    data: PropTypes.object
  };

  state = {
    selectedOptions: {}
  };

  componentDidUpdate(prevProps) {
    if (this.props.data.node !== prevProps.data.node) {
      const { options } = this.props.data.node;

      options.forEach(selector => {
        this.setState({
          selectedOptions: { [selector.name]: selector.values }
        });
      });
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
      console.log(option);
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
      selectedVariantImage: selectedVariant.image.src
    });
  };

  // handleQuantityChange = event => {
  //   this.setState({
  //     selectedVariantQuantity: event.target.value
  //   });
  // };

  // renderImages = images => {
  //   if (!this.props.data.node) {
  //     return null;
  //   }

  //   return images.map((image, index) => {
  //     return <img key={index} src={image.transformedSrc} />;
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

    return (
      <div className="pa3">
        <div className="ma3">[Breadcrumb goes here]</div>
        <div className="ma3 f2">{this.props.data.node.title}</div>

        <Variants>
          <div className="f4">Variants</div>
          {this.renderVariantSelector(options)}
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
