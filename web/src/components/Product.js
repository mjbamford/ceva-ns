import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ProductPane from './ProductPane'

const styles = theme => ({
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  image: {
    display: 'block',
    margin: '0 auto',
    height: '128px',
    marginBottom: theme.spacing.unit * 2
  }
})

function Product (props) {
  const { classes, product } = props
  return (
    <div>
      <Paper className={classes.paper} elevation={0}>
        <img src={product.imageUrl} alt={product.name} className={classes.image}/>
        <Typography variant="headline" component="h2">
          {product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {product.description}
        </Typography>
        <ProductPane product={product}/>
      </Paper>
      <Typography>
        See Also
      </Typography>
      <Paper>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Product)
