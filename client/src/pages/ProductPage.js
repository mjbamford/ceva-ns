import React, { Component } from 'react'
import AppBar from '../components/AppBar'
import Product from '../components/Product'

class ProductPage extends Component {
  constructor ({ id }) {
    super()
    this.state = ({ id: id, product: null })
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getProduct () {
    const { id } = this.state
    this.fetch(`/api/products/${id}`)
      .then(product => {
        if (product) {
          this.setState({ product: product })
        } else {
          this.setState({ product: null })
        }
      })
  }

  componentDidMount () {
    this.getProduct()
  }

  render () {
    const { product } = this.state
    return product && (
      <React.Fragment>
        <AppBar title={product.name} />
        <Product product={product} />
      </React.Fragment>
    )
  }
}

export default ProductPage
