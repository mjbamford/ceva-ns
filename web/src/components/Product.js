import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ProductCard from '../components/ProductCard'
import ProductPane from './ProductPane'

import ProductModel from '../models/Product'

const styles = theme => ({
  pos: {
    marginBottom: theme.spacing.unit
  },
  paper: {
    position: 'relative',
    padding: theme.spacing.unit * 2
  },
  image: {
    display: 'block',
    margin: '0 auto',
    height: '128px',
    marginBottom: theme.spacing.unit * 2
  },
  fab: {
    position: 'absolute',
    right: theme.spacing.unit * 2
  },
  seeAlsoTitle: {
    marginBottom: theme.spacing.unit * 2
  }
})

function Product (props) {
  const { classes, product } = props
  return (
    <div>
      <Paper className={classes.paper} elevation={0}>
        <Button variant="fab" color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Button>
        <img src={product.imageUrl} alt={product.name} className={classes.image}/>
        <Typography variant="headline" component="h2">
          {product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {product.description}
        </Typography>
        <ProductPane product={product}/>
      </Paper>
      <div className={classes.paper}>
        <Typography className={classes.seeAlsoTitle}>
          See Also
        </Typography>
        <Grid container spacing={16}>
          {
            product.seeAlso.map(id => {
              let product = ProductModel.find(id)
              return (
                <Grid key={product.id} item xs={12}>
                  <ProductCard product={product} />
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>
  )
}

export default withStyles(styles)(Product)
