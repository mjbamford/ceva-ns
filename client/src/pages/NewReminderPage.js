import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '../components/AppBar'
import Button from '@material-ui/core/Button';
import Calendar from '@material-ui/core/Divider'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
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

class NewReminderPage extends React.Component {
  constructor(props) {
    super(props)
    const { productId } = props
    this.horseNameRef = React.createRef()
    this.state = ({
      productId: productId,
      product: null,
      isNewHorseModalOpen: false,
      isConfirmationModalOption: false
    })
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getProduct () {
    const { productId } = this.state
    this.fetch(`/api/products/${productId}`)
      .then(product => {
        if (product) {
          this.setState({ product: product })
        } else {
          this.setState({ product: null })
        }
      })
  }

  handleOpen = () => {
    this.setState({ isNewHorseModalOpen: true })
  }

  handleClose = () => {
    const horseName = this.horseNameRef.current.value
    this.setState({ isNewHorseModalOpen: false, horseName: horseName })
  }

  componentDidMount () {
    this.getProduct()
  }

  render () {
    const { product, isNewHorseModalOpen, isConfirmationModalOpen } = this.state
    const { classes } = this.props
    return (
      <React.Fragment>
        <AppBar title="New Reminder"></AppBar>
        {product &&
          <Paper className={classes.paper} elevation={0}>
            <Dialog open={isNewHorseModalOpen}>
              <DialogTitle id="form-dialog-title">New Horse</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To add a horse to the reminder system, please provide its name.
                </DialogContentText>
                <TextField
                  margin="dense"
                  id="horseName"
                  name="horse[name]"
                  label="Horse Name"
                  inputRef={this.horseNameRef}
                  autoFocus
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Create
                </Button>
              </DialogActions>
            </Dialog>
            <img src={product.imageUrl} alt={product.name} className={classes.image}/>
            <Typography variant="headline" component="h2">
              {product.name}
            </Typography>
            <Typography component="div">
              <ReactMarkdown className={classes.directions} source={product.directions} skipHtml={true}/>
            </Typography>
            <Typography component="div">
              Which horses are to receive treatment?{' '}
              <a href='#horse/new' onClick={this.handleOpen}>
                Or, add a new horse.
              </a>
            </Typography>
            <Typography component="div">
              When is the first treatment?
            </Typography>
          </Paper>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(NewReminderPage)
