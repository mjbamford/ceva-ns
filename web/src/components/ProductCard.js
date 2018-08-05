import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    float: 'right',
    height: '96px',
    paddingLeft: '12px'
  }
}

function ProductCard(props) {
  const { classes, product } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          VET ONLY
        </Typography>
        <img src={product.imageUrl} alt={product.name} className={classes.image} />
        <Typography variant="headline" component="h2">
          {product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={product.link}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCard)
