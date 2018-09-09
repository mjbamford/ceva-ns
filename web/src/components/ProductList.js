import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Product from '../models/Product'
import ProductCard from '../components/ProductCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  }
})

function ProductList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        {
          Product.all().map(product => (
            <Grid key={product.id} item xs={12}>
              <Paper elevation={0}>
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
