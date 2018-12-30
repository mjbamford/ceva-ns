import React, { Component } from 'react'
import AppBar from '../components/AppBar'
import Product from '../components/Product'

class StockPage extends Component {
  constructor ({ code }) {
    super()
    this.state = ({ code: code, product: null })
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getProduct () {
    const { code } = this.state
    this.fetch(`/api/datasheets/${code}`)
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

export default StockPage
