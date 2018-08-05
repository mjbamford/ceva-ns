import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ProductCard from '../components/ProductCard'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit
  }
})

const products = [
  {
    id: 666,
    imageUrl: '/images/products/tildren.png',
    name: 'Tildren Injection',
    description: 'Treatment for bone and cartilage-related lameness such as that of Navicular Disease and Bone Spavin',
    link: '/products/666'
  },
  {
    id: 667,
    imageUrl: '/images/products/sedamed.png',
    name: 'Sedamed Injection',
    description: 'Reversible medetomidine sedative and analgesic',
    link: '/products/667'
  }
]

function ProductList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {
          products.map(product => (
            <Grid key={product.id} item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <ProductCard product={product} />
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductList)
